import {
    Controller, Post, Body,
} from '@nestjs/common';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { Logger } from '../../shared/loggers/appLogger/LoggerDecorator';
import LoggerService from '../../shared/loggers/appLogger/LoggerService';
import Logging from '../../shared/loggers/methodLogger/Logging';
import CreateItemRequest from './entities/CreateItemRequest';
import Item from '../../interfaces/Item';
import ItemService from './ItemService';
import ItemResponse from './entities/ItemResponse';

@ApiTags('Items')
@Controller('item')
export default class ItemController {
    constructor(
        private readonly itemService: ItemService,
        @Logger('ItemController') private logger: LoggerService,
    ) {}

    @Post()
    @ApiOperation({
        summary: 'Создание предмета',
        description: 'Создает предмет',
    })
    @ApiResponse({
        status: 201,
        type: ItemResponse,
        isArray: false,
        description: 'Создает предмет',
    })
    @Logging()
    async createItem(@Body() item: CreateItemRequest): Promise<Item> {
        return this.itemService.createItem(item);
    }
}
