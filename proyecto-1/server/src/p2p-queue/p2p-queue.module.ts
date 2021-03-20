import { Module } from '@nestjs/common';
import { QueueModule } from 'src/queue/queue.module';
import { QueueService } from 'src/queue/queue.service';
import { P2pQueueController } from './p2p-queue.controller';
import { P2pQueueService } from './p2p-queue.service';

@Module({
  imports: [QueueModule],
  providers: [QueueService, P2pQueueService],
  exports: [P2pQueueService],
  controllers: [P2pQueueController],
})
export class P2pQueueModule { }
