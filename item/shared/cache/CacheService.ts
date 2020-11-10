import { Inject, Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { cacheConfig } from '../../config';
import { Logger } from '../loggers/appLogger/LoggerDecorator';
import LoggerService from '../loggers/appLogger/LoggerService';

@Injectable()
class CacheService {
    private redisClient: any;

    private expirationInSeconds = 'EX';

    constructor(
        @Inject('RedisService') private readonly redis: RedisService,
        @Logger('CacheService') private logger: LoggerService,
    ) {
    }

    getRedisClient = async () => {
        this.redisClient = await this.redis.getClient();
    };

    getKeyValue = async (key: string): Promise<string | object | null | undefined> => {
        if (!this.redisClient) {
            await this.getRedisClient();
        }

        const keyValue = await this.redisClient.get(key);

        try {
            return JSON.parse(keyValue);
        } catch (error) {
            return keyValue;
        }
    };

    deleteKey = async (key: string): Promise<string> => {
        if (!this.redisClient) {
            await this.getRedisClient();
        }

        return this.redisClient.del(key);
    };

    setKeyValue = async (key: string,
        value: string | number | object,
        ttl?: number): Promise<string> => {
        if (!this.redisClient) {
            await this.getRedisClient();
        }

        const expires = ttl || cacheConfig.expires;

        if (typeof value !== 'string' && typeof value !== 'number') {
            return this.redisClient.set(
                key,
                JSON.stringify(value),
                this.expirationInSeconds,
                expires,
            );
        }

        return this.redisClient.set(key, value, this.expirationInSeconds, expires);
    };
}

export default CacheService;
