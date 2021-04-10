import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class ChannelCreateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;
}
