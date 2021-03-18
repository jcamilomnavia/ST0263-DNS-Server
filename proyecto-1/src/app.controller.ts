import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChannelsService } from 'src/channels/channels.service';
import { P2pQueueService } from 'src/p2p-queue/p2p-queue.service';

@Controller()
export class AppController {
  constructor(
    private readonly channelService: ChannelsService,
    private readonly queueService: P2pQueueService,
  ) { }

  @Post('/push')
  push(@Body() pushMessageDto: any) {
    const { type, message, id } = pushMessageDto;
    if (type === 'channel') {
      return this.channelService.pushToChannel(id, message);
    }
    if (type === 'queue') {
      return this.queueService.pushToQueue(id, message);
    } else {
      throw new Error('Type invalid');
    }
  }

  @Post('/create')
  create(@Body() createExchangerDto: any) {
    const { type, id } = createExchangerDto;
    if (type === 'channel') {
      return this.channelService.create(id);
    }
    if (type === 'queue') {
      return this.queueService.create(id);
    } else {
      throw new Error('Type invalid');
    }
  }

  @Post('/subscribe')
  subscribe(@Body() subscribeToChannel: any) {
    const { id, consumer } = subscribeToChannel;
    return this.channelService.subscribe(id, consumer);
  }

  @Get('pull/:type/:id/:consumer')
  retrieve(@Param('type') type, @Param('id') id, @Param('consumer') consumer) {
    if (type === 'channel') {
      return this.channelService.retrieveFromQueue(id, consumer);
    }
    if (type === 'queue') {
      return this.queueService.retrieveFromQueue(id);
    } else {
      throw new Error('Type invalid');
    }
  }
}
