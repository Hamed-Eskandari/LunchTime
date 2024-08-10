import { IsNotEmpty, IsEmail, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username is required' })
  username: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @Matches(/^[^@\s]+@brockhaus\.com$/, {
    message: 'Only email addresses with the domain @brockhaus.com are allowed',
  })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;
}
