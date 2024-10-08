import { Controller, Post, Body, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { LoginDto } from '../dto/login.dto';

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
      throw new BadRequestException('Benutzername oder E-Mail existiert bereits');
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
