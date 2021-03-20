import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ChannelsService } from 'src/channels/channels.service';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelService: ChannelsService) { }

  @Post('/create')
  create(@Body() createExchangerDto: any) {
    const { id } = createExchangerDto;
    return this.channelService.create(id);
  }

  @Post('/subscribe')
  subscribe(@Body() subscribeToChannel: any) {
    const { id, consumer } = subscribeToChannel;
    return this.channelService.subscribe(id, consumer);
  }

  @Post('/push')
  push(@Body() pushMessageDto: any) {
    const { message, id } = pushMessageDto;
    return this.channelService.pushToChannel(id, message);
  }

  @Delete('/delete')
  delete(@Body() createExchangerDto: any) {
    const { id } = createExchangerDto;
    return this.channelService.delete(id);
  }

  @Get('list')
  list() {
    return this.channelService.list();
  }

  @Get('pull/:id/:consumer')
  retrieve(@Param('id') id, @Param('consumer') consumer) {
    return this.channelService.retrieveFromQueue(id, consumer);
  }
}
