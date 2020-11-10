import { Module } from '@nestjs/common';
import ItemController from './ItemController';
import ItemService from './ItemService';

@Module({
    imports: [],
    controllers: [ItemController],
    providers: [ItemService],
})
export default class ItemModule {}
