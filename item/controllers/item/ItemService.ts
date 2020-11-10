import { Inject, Injectable } from '@nestjs/common';
import { Logger } from '../../shared/loggers/appLogger/LoggerDecorator';
import LoggerService from '../../shared/loggers/appLogger/LoggerService';
import ItemRepository from '../../database/repositories/item/ItemRepository';
import Item from '../../interfaces/Item';

@Injectable()
class ItemService {
    constructor(
        @Inject('ItemRepository') private itemRepository: ItemRepository,
        @Logger('ItemService') private logger: LoggerService,
    ) {
    }

    async createItem(item: Item): Promise<Item> {
        return this.itemRepository.createItem(item);
    }
}

export default ItemService;
