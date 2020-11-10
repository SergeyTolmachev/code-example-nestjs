import { Global, Module } from '@nestjs/common';
import SQSModule from './sqs/SQSModule';
import QueueServiceModule from './queue/QueueModule';

const modules = [QueueServiceModule, SQSModule];

@Global()
@Module({
    providers: modules,
    exports: modules,
})
export default class QueueModule {}
