import {
    BadRequestException,
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    HttpStatus,
    Post,
    Res,
    UnauthorizedException,
    UseInterceptors,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';
import { AuthService } from './auth.service';
import { Tokens } from './interfaces';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { Cookie, Public, UserAgent } from '../../libs/common/src/decorators';
import { UserResponse } from '../user/responses';
import { TokenService } from './token.service';

const REFRESH_TOKEN = 'refreshToken';

@Public()
@Controller('auth')
export class AuthController {
    private nodeEnv: string;

    constructor(
        private readonly authService: AuthService,
        private readonly tokenService: TokenService,
        configService: ConfigService,
    ) {
        this.nodeEnv = configService.get('NODE_ENV', 'development');
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('register')
    async register(@Body() dto: RegisterDto) {
        const user = await this.authService.register(dto);
        if (!user) {
            throw new BadRequestException(
                `Не получается зарегистрировать пользователя с данными ${JSON.stringify(dto)}`,
            );
        }
        return new UserResponse(user);
    }

    @Post('login')
    async login(@Body() dto: LoginDto, @Res() res: Response, @UserAgent() userAgent: string) {
        const tokens = await this.authService.login(dto, userAgent);
        if (!tokens) {
            throw new BadRequestException(`Не получается войти с данными ${JSON.stringify(dto)}`);
        }
        this.setRefreshTokenToCookies(tokens, res);
    }

    @Get('logout')
    async logout(@Cookie(REFRESH_TOKEN) refreshToken: string, @Res() res: Response) {
        if (!refreshToken) {
            res.sendStatus(HttpStatus.OK);
            return;
        }
        await this.tokenService.deleteRefreshToken(refreshToken);
        res.cookie(REFRESH_TOKEN, '', { httpOnly: true, secure: true, expires: new Date() });
        res.sendStatus(HttpStatus.OK);
    }

    @Get('refresh-tokens')
    async refreshToken(
        @Cookie(REFRESH_TOKEN) refreshToken: string,
        @Res() res: Response,
        @UserAgent() userAgent: string,
    ) {
        if (!refreshToken) {
            throw new UnauthorizedException();
        }
        const tokens = await this.tokenService.refreshTokens(refreshToken, userAgent);
        if (!tokens) {
            throw new UnauthorizedException();
        }
        this.setRefreshTokenToCookies(tokens, res);
    }

    private setRefreshTokenToCookies(tokens: Tokens, res: Response) {
        if (!tokens) {
            throw new UnauthorizedException();
        }
        res.cookie(REFRESH_TOKEN, tokens.refreshToken.token, {
            httpOnly: true,
            // все запросы должны отправляться с того же сайта, на котором находимся, чтоб не было попыток делать запрос с другого браузера
            sameSite: 'lax',
            expires: new Date(tokens.refreshToken.exp),
            secure: this.nodeEnv === 'production',
            // указываем, что куки доступны на всех страницах сайта
            path: '/',
        });
        res.status(HttpStatus.CREATED).json({ accessToken: tokens.accessToken });
    }
}
