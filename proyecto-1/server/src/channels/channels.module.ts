import { Module } from '@nestjs/common';
import { P2pQueueModule } from 'src/p2p-queue/p2p-queue.module';
import { P2pQueueService } from 'src/p2p-queue/p2p-queue.service';
import { ChannelsService } from './channels.service';
import { ChannelsController } from './channels.controller';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [P2pQueueModule],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
    P2pQueueService,
    ChannelsService,
  ],
  exports: [ChannelsService],
  controllers: [ChannelsController],
})
export class ChannelsModule { }
