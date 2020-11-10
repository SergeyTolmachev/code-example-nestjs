import { DynamicModule, Global, Module } from '@nestjs/common';
import SequelizeModule from './sequelize/SequelizeModule';
import SequelizeUnitOfWork from './sequelize/unitOfWork/SequelizeUnitOfWork';

@Global()
@Module({})
export default class DatabaseModule {
    static forRoot(): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [SequelizeModule],
            providers: [{
                provide: 'UnitOfWork',
                useClass: SequelizeUnitOfWork,
            }],
            exports: ['UnitOfWork'],
        };
    }
}
