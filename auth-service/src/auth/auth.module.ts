import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { jwtModuleAsyncOptions } from './config';
import { STRATEGIES } from './strategies';
import { GUARDS } from './guards';
import { TokenService } from './token.service';

@Module({
    imports: [PassportModule, JwtModule.registerAsync(jwtModuleAsyncOptions()), UserModule],
    providers: [AuthService, TokenService, ...STRATEGIES, ...GUARDS],
    controllers: [AuthController],
})
export class AuthModule {}
