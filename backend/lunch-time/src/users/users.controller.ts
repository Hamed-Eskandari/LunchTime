// src/users/users.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
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
}
