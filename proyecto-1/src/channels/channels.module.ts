import { Module } from '@nestjs/common';
import { P2pQueueModule } from 'src/p2p-queue/p2p-queue.module';
import { P2pQueueService } from 'src/p2p-queue/p2p-queue.service';
import { ChannelsService } from './channels.service';

@Module({
  imports: [P2pQueueModule],
  providers: [P2pQueueService, ChannelsService],
  exports: [ChannelsService],
})
export class ChannelsModule { }
