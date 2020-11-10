import { Test } from '@nestjs/testing';
import CacheService from '../CacheService';

const client = {
    get: jest.fn(),
    del: () => 'key',
    set: () => 'key',
};

const RedisServiceMock = {
    provide: 'RedisService',
    useValue: {
        getClient: () => client,
    },
};

client.get
    .mockReturnValueOnce(JSON.stringify({ key: 'key' }))
    .mockReturnValueOnce('AXMASUADASFE');

describe('CacheService', () => {
    let cacheService: CacheService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [CacheService,
                RedisServiceMock,
                {
                    provide: 'LoggerServiceCacheService',
                    useValue: {},
                }],
        })
            .compile();

        cacheService = module.get<CacheService>('CacheService');
    });

    describe('CacheService', () => {
        it('getKeyValue JSON', async () => {
            const result = await cacheService.getKeyValue('key');
            expect(result).toEqual({ key: 'key' });
        });
    });
});
