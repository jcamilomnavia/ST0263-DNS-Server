import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/register')
  create(@Body() user: UserLoginDto) {
    return this.usersService.create(user);
  }
}
