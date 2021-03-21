import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/register')
  create(@Body() user) {
    return this.usersService.create(user);
  }
}
