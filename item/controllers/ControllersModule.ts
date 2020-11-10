import { Module } from '@nestjs/common';
import ItemModule from './item/ItemModule';

@Module({
    imports: [
        ItemModule
    ],
})
export default class ControllersModule {}
