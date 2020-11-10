// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { FastifyAdapter } from '@nestjs/platform-fastify';
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

const AppModule = {
    providers: [Service, {
        provide: 'ItemRepository',
        useValue: itemRepositoryMock,
    }],
    controllers: [Controller],
};

describe('ItemController', () => {
    let server: any;
    let app: INestApplication;

    beforeEach(async () => {
        const module = await Test.createTestingModule(AppModule)
            .compile();

        app = module.createNestApplication(new FastifyAdapter());
        await app.init();
        await app.getHttpAdapter().getInstance().ready();
        server = app.getHttpServer();
    });

    describe('/item', () => {
        it('should return created coupon', async () => {
            await request(server)
                .post('/item')
                .send({
                    description: 'description',
                    code: 'code',
                })
                .expect(200, stubItem);
        });
    });
});
