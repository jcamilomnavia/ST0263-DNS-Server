import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChannelsService } from './channels/channels.service';
import { ChannelsModule } from './channels/channels.module';
import { QueueService } from './queue/queue.service';
import { QueueModule } from './queue/queue.module';
import { P2pQueueService } from './p2p-queue/p2p-queue.service';
import { P2pQueueModule } from './p2p-queue/p2p-queue.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    QueueModule,
    P2pQueueModule,
    ChannelsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [ChannelsService, QueueService, P2pQueueService],
})
export class AppModule { }
