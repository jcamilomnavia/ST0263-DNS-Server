import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { P2pQueueService } from 'src/p2p-queue/p2p-queue.service';

@Controller('queue')
export class P2pQueueController {
  constructor(private readonly queueService: P2pQueueService) { }

  @Post('/push')
  push(@Body() pushMessageDto: any) {
    const { message, id } = pushMessageDto;
    return this.queueService.pushToQueue(id, message);
  }

  @Post('/create')
  create(@Body() createExchangerDto: any) {
    const { id } = createExchangerDto;

    return this.queueService.create(id);
  }

  @Get('list')
  lis() {
    return this.queueService.list();
  }

  @Get('pull/:id')
  retrieve(@Param('id') id) {
    return this.queueService.retrieveFromQueue(id);
  }
}
