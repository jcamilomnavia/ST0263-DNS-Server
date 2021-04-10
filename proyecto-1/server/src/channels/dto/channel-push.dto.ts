import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsObject, IsDate } from 'class-validator';

export class MessageContentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  date: Date;
}

export class ChannelPushDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ type: MessageContentDto })
  @IsObject()
  @IsNotEmpty()
  message: MessageContentDto;
}
