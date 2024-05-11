import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { Tokens } from './interfaces';
import { Token, User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { v4 } from 'uuid';
import { add } from 'date-fns';

@Injectable()
export class TokenService {
    private readonly logger = new Logger(TokenService.name);

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly prismaService: PrismaService,
    ) {}

    async refreshTokens(refreshToken: string, userAgent: string) {
        const token = await this.prismaService.token.findUnique({
            where: {
                token: refreshToken,
            },
        });
        if (!token) {
            throw new UnauthorizedException();
        }
        await this.prismaService.token.delete({ where: { token: refreshToken } });
        if (new Date(token.exp) < new Date()) {
            throw new UnauthorizedException();
        }
        const user = await this.userService.findOne(token.userId);
        return this.generateTokens(user, userAgent);
    }

    async generateTokens(user: User, userAgent: string): Promise<Tokens> {
        const accessToken =
            'Bearer ' +
            this.jwtService.sign({
                id: user.id,
                email: user.email,
                roles: user.roles,
            });

        const refreshToken = await this.getRefreshToken(user.id, userAgent);

        return { accessToken, refreshToken };
    }

    private async getRefreshToken(userId: string, userAgent: string): Promise<Token> {
        const existToken = await this.prismaService.token.findFirst({
            where: {
                userId,
                userAgent,
            },
        });
        const token = existToken?.token ?? '';

        return this.prismaService.token.upsert({
            where: { token },
            update: {
                token: v4(),
                exp: add(new Date(), { months: 1 }),
            },
            create: {
                token: v4(),
                exp: add(new Date(), { months: 1 }),
                userId,
                userAgent,
            },
        });
    }

    deleteRefreshToken(token: string) {
        return this.prismaService.token.delete({ where: { token } });
    }
}
