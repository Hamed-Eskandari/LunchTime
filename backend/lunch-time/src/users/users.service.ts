import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findOneByUsernameOrEmail(
    username: string,
    email: string,
  ): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: [{ username }, { email }],
    });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }
  async findByUsernameAndPassword(username: string, password: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username, password } });
  }
}
