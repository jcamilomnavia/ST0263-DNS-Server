import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { P2pQueueService } from 'src/p2p-queue/p2p-queue.service';

@Controller('queue')
export class P2pQueueController {
  constructor(private readonly queueService: P2pQueueService) { }

  @UseGuards(JwtAuthGuard)
  @Post('/push')
  push(@Body() pushMessageDto: any) {
    const { message, id } = pushMessageDto;
    return this.queueService.pushToQueue(id, message);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() createExchangerDto: any) {
    const { id } = createExchangerDto;

    return this.queueService.create(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  lis() {
    return this.queueService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Get('pull/:id')
  retrieve(@Param('id') id) {
    return this.queueService.retrieveFromQueue(id);
  }
}
