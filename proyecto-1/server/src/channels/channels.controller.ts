import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChannelsService } from 'src/channels/channels.service';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelService: ChannelsService) { }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() createExchangerDto: any) {
    const { id } = createExchangerDto;
    return this.channelService.create(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/subscribe')
  subscribe(@Body() subscribeToChannel: any) {
    const { id, consumer } = subscribeToChannel;
    return this.channelService.subscribe(id, consumer);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/push')
  push(@Body() pushMessageDto: any) {
    const { message, id } = pushMessageDto;
    return this.channelService.pushToChannel(id, message);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete')
  delete(@Body() createExchangerDto: any) {
    const { id } = createExchangerDto;
    return this.channelService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  list() {
    return this.channelService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Get('pull/:id/:consumer')
  retrieve(@Param('id') id, @Param('consumer') consumer) {
    return this.channelService.retrieveFromQueue(id, consumer);
  }
}
