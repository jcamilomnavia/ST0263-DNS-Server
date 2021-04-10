import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ChannelsService } from 'src/channels/channels.service';
import { ChannelCreateDto } from './dto/channel-create.dto';
import { ChannelPushDto, MessageContentDto } from './dto/channel-push.dto';
import { ChannelSubscribeDto } from './dto/channel-subscribe.dto';

@Controller('channels')
export class ChannelsController {
  constructor(private readonly channelService: ChannelsService) { }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  @ApiOkResponse({
    type: ChannelCreateDto,
  })
  create(@Body() createExchangerDto: ChannelCreateDto) {
    const { id } = createExchangerDto;
    return this.channelService.create(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/subscribe')
  @ApiOkResponse({
    type: ChannelCreateDto,
  })
  subscribe(@Body() subscribeToChannel: ChannelSubscribeDto, @Req() req: any) {
    const { id, consumer } = subscribeToChannel;
    return this.channelService.subscribe(id, consumer, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/unsubscribe')
  @ApiOkResponse({
    type: Boolean,
  })
  unsubscribe(
    @Body() subscribeToChannel: ChannelSubscribeDto,
    @Req() req: any,
  ) {
    const { id, consumer } = subscribeToChannel;
    return this.channelService.unsubscribe(id, consumer, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/push')
  push(@Body() pushMessageDto: ChannelPushDto) {
    const { message, id } = pushMessageDto;
    return this.channelService.pushToChannel(id, message);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete')
  delete(@Body() createExchangerDto: ChannelCreateDto) {
    const { id } = createExchangerDto;
    return this.channelService.delete(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('list')
  @ApiOkResponse({
    type: [String],
  })
  list() {
    return this.channelService.list();
  }

  @UseGuards(JwtAuthGuard)
  @Get('pull/:id/:consumer')
  @ApiOkResponse({
    type: [MessageContentDto],
  })
  retrieve(@Param('id') id, @Param('consumer') consumer) {
    return this.channelService.retrieveFromQueue(id, consumer);
  }
}
