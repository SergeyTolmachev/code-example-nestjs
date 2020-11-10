import { Test } from '@nestjs/testing';
import Controller from '../ItemController';
import Service from '../ItemService';
import Item from '../../../interfaces/Item';

const stubItem: Item = {
    id: 10,
    description: 'description',
    code: 'code',
};

const itemRepositoryMock = {
    createItem: () => stubItem,
};

describe('ItemController', () => {
    let controller: Controller;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [Service, {
                provide: 'ItemRepository',
                useValue: itemRepositoryMock,
            }],
            controllers: [Controller],
        })
            .compile();

        controller = module.get<Controller>(Controller);
    });

    describe('createItem', () => {
        it('should return an item', async () => {
            const item = await controller.createItem({
                description: 'description',
                code: 'code',
            });

            expect(item).toEqual(stubItem);
        });
    });
});
