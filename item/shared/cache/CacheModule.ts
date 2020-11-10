import { Global, Module } from '@nestjs/common';
import CacheService from './CacheService';

@Global()
@Module({
    imports: [],
    providers: [CacheService],
    exports: [CacheService],
})
export default class CacheModule {}
