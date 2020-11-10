import { Module } from '@nestjs/common';
import SequelizeItemRepository from './SequelizeItemRepository';
import DatabaseModule from '../../DatabaseModule';
import ItemModel from '../../sequelize/models/ItemModel';

@Module({
    imports: [
        DatabaseModule.forFeature([ItemModel]),
    ],
    providers: [
        {
            provide: 'ItemRepository',
            useClass: SequelizeItemRepository,
        },
    ],
    exports: [
        'ItemRepository',
    ],
})
export default class ItemRepositoryModule {}
