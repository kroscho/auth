import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cookieParser());
    const configService: ConfigService = app.get(ConfigService);
    const port = configService.getOrThrow<number>('PORT_APP');

    await app.listen(port);
    console.log(`Started on port ${port}`);
}
bootstrap();
