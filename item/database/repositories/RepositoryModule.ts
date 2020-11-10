import { Global, Module } from '@nestjs/common';
import ItemRepositoryModule from './item/ItemRepositoryModule';

const repositories = [
    ItemRepositoryModule,
];

@Global()
@Module({
    imports: repositories,
    exports: repositories,
})
export default class RepositoryModule {}
