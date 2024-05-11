import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role, User } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcrypt';
import { JwtPayload } from '../auth/interfaces';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ConfigService } from '@nestjs/config';
import { convertToSecondsUtil } from '../../libs/common/src/utils';

@Injectable()
export class UserService {
    private jwtExp: string;

    constructor(
        private readonly prismaService: PrismaService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        configService: ConfigService,
    ) {
        this.jwtExp = configService.get('JWT_EXP');
    }

    save(user: Partial<User>): Promise<User> {
        const hashedPassword = this.hashPassword(user.password);

        return this.prismaService.user.create({
            data: {
                email: user.email,
                password: hashedPassword,
                roles: ['USER'],
            },
        });
    }

    async findOne(idOrEmail: string, isReset = false): Promise<User> {
        if (isReset) {
            await this.cacheManager.del(idOrEmail);
        }
        const userCache = await this.cacheManager.get<User>(idOrEmail);
        if (!userCache) {
            const user = await this.prismaService.user.findFirst({
                where: {
                    OR: [{ id: idOrEmail }, { email: idOrEmail }],
                },
            });
            if (!user) {
                return null;
            }
            await this.cacheManager.set(idOrEmail, user, convertToSecondsUtil(this.jwtExp));
            return user;
        }
        return userCache;
    }

    async delete(id: string, user: JwtPayload) {
        const isAdmin = user.roles.includes(Role.ADMIN);
        if (isAdmin && user.id !== id) {
            await Promise.all([this.cacheManager.del(id), this.cacheManager.del(user.email)]);
            return this.prismaService.user.delete({ where: { id }, select: { id: true } });
        } else throw new ForbiddenException();
    }

    private hashPassword(password: string) {
        return hashSync(password, genSaltSync(10));
    }
}
