import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { APP_INTERCEPTOR } from '@nestjs/core';
import ControllersModule from './controllers/ControllersModule';
import DatabaseModule from './database/DatabaseModule';
import RepositoryModule from './database/repositories/RepositoryModule';
import SharedModule from './shared/SharedModule';

const AppInterceptorProvider = {
    provide: APP_INTERCEPTOR,
    useExisting: 'PrometheusInterceptor',
};

@Module({
    imports: [
        ControllersModule,
        DatabaseModule.forRoot(),
        RedisModule.register(),
        RepositoryModule,
        SharedModule,
    ],
    providers: [
        AppInterceptorProvider,
    ],
})
export default class AppModule {}
