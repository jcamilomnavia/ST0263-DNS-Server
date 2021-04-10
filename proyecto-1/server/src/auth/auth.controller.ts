import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { UserLoginDto } from 'src/users/dto/user-login.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginUserDto: UserLoginDto) {
    return this.authService.login(loginUserDto);
  }
}
