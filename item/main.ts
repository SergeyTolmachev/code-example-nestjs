import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';
import { appConfig } from './config';
import AppModule from './AppModule';
import AccessLoggerNestMiddleware from './shared/loggers/accessLogger/AccessLoggerNestMiddleware';
import NestLoggerFactory from './shared/loggers/appLogger/core/NestLoggerFactory';

(async () => {
    const logger = NestLoggerFactory.getLogger();

    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter(),
        {
            logger,
        },
    );

    const accessLoggerMiddleware = app.get<AccessLoggerNestMiddleware>(AccessLoggerNestMiddleware);

    app.use(accessLoggerMiddleware.use);

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            forbidUnknownValues: true,
        }),
    );

    useContainer(app.select(AppModule), { fallbackOnErrors: true });

    const options = new DocumentBuilder()
        .setTitle('item api')
        .setDescription('item service, подробная схема расположена здесь: \n\r')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/documentation', app, document);

    app.enableCors();

    try {
        await app.listen(appConfig.port, appConfig.host);
    } catch (error) {
        process.exit(1);
    }
})();
