import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail('Please enter a valid email address')
  email: string;

  @IsString()
  username: string;
}
