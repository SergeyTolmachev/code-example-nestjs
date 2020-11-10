import { Global, Module } from '@nestjs/common';
import CacheModule from './cache/CacheModule';

const modules = [
    CacheModule,
];

@Global()
@Module({
    imports: modules,
    exports: modules,
})
export default class SharedModule {}
