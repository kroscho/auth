import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const configService: ConfigService = app.get(ConfigService);
    const port = configService.getOrThrow<number>('PORT_APP');

    await app.listen(port);
    console.log(`Started on port ${port}`);
}
bootstrap();
