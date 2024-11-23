import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './user.dto';
import { ResponseService } from 'src/response/response.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: UserDTO.CreateOne.Request) {
    return this.usersService.create(dto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: UserDTO.FindOne.Request) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: UserDTO.UpdateOne.Request['id'],
    @Body() dto: UserDTO.UpdateOne.Request,
  ) {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: UserDTO.DeleteOne.Request) {
    return this.usersService.remove(id);
  }
}
