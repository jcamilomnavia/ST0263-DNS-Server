import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChannelCreateDto } from 'src/channels/dto/channel-create.dto';
import {
  ChannelPushDto,
  MessageContentDto,
} from 'src/channels/dto/channel-push.dto';
import { P2pQueueService } from 'src/p2p-queue/p2p-queue.service';

@Controller('queue')
export class P2pQueueController {
  constructor(private readonly queueService: P2pQueueService) { }

  @UseGuards(JwtAuthGuard)
  @Post('/push')
  push(@Body() pushMessageDto: ChannelPushDto) {
    const { message, id } = pushMessageDto;
    return this.queueService.pushToQueue(id, message);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  @ApiOkResponse({
    type: ChannelCreateDto,
  })
  create(@Body() createExchangerDto: ChannelCreateDto) {
    const { id } = createExchangerDto;
    return this.queueService.create(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  @ApiOkResponse({
    type: [String],
  })
  lis() {
    return this.queueService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Get('pull/:id')
  @ApiOkResponse({
    type: [MessageContentDto],
  })
  retrieve(@Param('id') id) {
    return this.queueService.retrieveFromQueue(id);
  }
}
