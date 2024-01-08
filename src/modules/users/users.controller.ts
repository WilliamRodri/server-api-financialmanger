import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDtos } from './dtos/users/create-user.dtos';
import { UpdateUserDtos } from './dtos/users/update-user.dtos';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getUsers() {
    return this.usersService.getUsers();
  }

  @Post('create')
  createUser(@Body() body: CreateUserDtos) {
    return this.usersService.createUser(body);
  }

  @Patch('update/:id')
  @UseGuards(AuthGuard('jwt'))
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDtos) {
    return this.usersService.updateUser(id, body);
  }

  @Delete('delete/:id')
  @UseGuards(AuthGuard('jwt'))
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
