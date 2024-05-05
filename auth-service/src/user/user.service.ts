import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role, User } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcrypt';
import { JwtPayload } from '../auth/interfaces';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}

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

    findOne(idOrEmail: string): Promise<User> {
        return this.prismaService.user.findFirst({
            where: {
                OR: [{ id: idOrEmail }, { email: idOrEmail }],
            },
        });
    }

    delete(id: string, user: JwtPayload) {
        const isAdmin = user.roles.includes(Role.ADMIN);
        if (isAdmin && user.id !== id) {
            return this.prismaService.user.delete({ where: { id }, select: { id: true } });
        } else throw new ForbiddenException();
    }

    private hashPassword(password: string) {
        return hashSync(password, genSaltSync(10));
    }
}
