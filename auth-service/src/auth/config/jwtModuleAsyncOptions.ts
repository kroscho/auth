import { ConfigService } from '@nestjs/config';
import { JwtModuleAsyncOptions, JwtModuleOptions } from '@nestjs/jwt';

const getJwtModuleOptions = (config: ConfigService): JwtModuleOptions => ({
    secret: config.get('JWT_SECRET'),
    signOptions: {
        expiresIn: config.get('JWT_EXP', '5m'),
    },
});

export const jwtModuleAsyncOptions = (): JwtModuleAsyncOptions => ({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => getJwtModuleOptions(config),
});
