import { ConflictException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginDto, RegisterDto } from './dto';
import { Tokens } from './interfaces';
import { compareSync } from 'bcrypt';
import { User } from '@prisma/client';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
    private readonly logger = new Logger(AuthService.name);

    constructor(
        private readonly userService: UserService,
        private readonly tokenService: TokenService,
    ) {}

    async register(dto: RegisterDto) {
        const user: User = await this.userService.findOne(dto.email).catch((err) => {
            this.logger.error(err);
            return null;
        });
        if (user) {
            throw new ConflictException('Пользователь с таким email уже зарегистрирован');
        }
        return this.userService.save(dto).catch((err) => {
            this.logger.error(err);
            return null;
        });
    }

    async login(dto: LoginDto, userAgent: string): Promise<Tokens> {
        const user: User = await this.userService.findOne(dto.email, true).catch((err) => {
            this.logger.error(err);
            return null;
        });
        if (!user || !compareSync(dto.password, user.password)) {
            throw new UnauthorizedException('Не верный логин или пароль');
        }

        return this.tokenService.generateTokens(user, userAgent);
    }
}
