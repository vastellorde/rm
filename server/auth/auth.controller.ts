import {Body, Controller, Post, ValidationPipe, Request, UseGuards, Get} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthGuard} from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(
    @Body(ValidationPipe) authCredentialsDto: {username: string, password: string}
  ): Promise<void> {
    return await this.authService.signUp(authCredentialsDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async signIn(@Request() req): Promise<any> {
    return this.authService.signIn(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/user')
  async user(@Request() req): Promise<any> {
    return req.user;
  }
}
