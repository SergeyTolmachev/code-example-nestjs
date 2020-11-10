import { Test } from '@nestjs/testing';
import ItemRepository from '../ItemRepository';
import Item from '../../../../interfaces/Item';
import ItemModel from '../../../sequelize/models/ItemModel';
import ItemRepositoryModule from '../ItemRepositoryModule';

const stubItem: Item = {
    id: 10,
    description: 'description',
    code: 'code',
};

const ItemModelMock = {
    provide: getModelToken(ItemModel),
    useValue: {
        create: () => stubItem,
    },
};

describe('ItemRepository', () => {
    let itemRepository: ItemRepository;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [ItemRepositoryModule],
        })
            .overrideProvider(ItemModelMock.provide)
            .useValue(ItemModelMock.useValue)
            .compile();

        itemRepository = module.get<ItemRepository>('ItemRepository');
    });

    describe('createItem', () => {
        it('should return a item', async () => {
            const item = await itemRepository.createItem({
                description: 'description',
                code: 'code',
            });

            expect(item).toEqual(stubItem);
        });
    });
});
