// src/users/users.controller.ts
import { Controller, Post, Body, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';
import { LoginDto } from './login.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    // Check if username or email already exists
    const userExists = await this.usersService.findOneByUsernameOrEmail(
      createUserDto.username,
      createUserDto.email,
    );

    if (userExists) {
      throw new BadRequestException('Username or email already exists');
    }

    return this.usersService.create(createUserDto);
  }
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.usersService.findByUsernameAndPassword(
      loginDto.username,
      loginDto.password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      message: 'Login successful',
      user,
    };
  }
}
