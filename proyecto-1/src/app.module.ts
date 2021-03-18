import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChannelsService } from './channels/channels.service';
import { QueueService } from './queue/queue.service';
import { P2pQueueService } from './p2p-queue/p2p-queue.service';
import { QueueModule } from './queue/queue.module';
import { P2pQueueModule } from './p2p-queue/p2p-queue.module';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [QueueModule, P2pQueueModule, ChannelsModule],
  controllers: [AppController],
  providers: [ChannelsService, QueueService, P2pQueueService],
})
export class AppModule { }
