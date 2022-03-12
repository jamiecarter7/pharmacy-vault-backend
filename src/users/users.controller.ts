import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ValidationPipe } from '../pipes/validation.pipe';
// import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log('-- creating user --');
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll({});
  }

  // @Get(':id')
  // findOne(@Param('id') id: ObjectId) {
  //   return this.usersService.findOneByID(id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: ObjectId, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: ObjectId) {
  //   return this.usersService.remove(id);
  // }

  // @Post()
  // async create(@Body() createUserDto: CreateUserDto) {
  //   return this.create(createUserDto);
  // }

  // @Get()
  // findAll(): string {
  //   return 'This action returns all users';
  // }

  // @Get(':id')
  // findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} user`;
  // }
}
