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
  constructor(
    private readonly usersService: UsersService,
    private readonly responseService: ResponseService,
  ) {}

  @Post()
  create(@Body() dto: UserDTO.CreateOne.Request) {
    const data = this.usersService.create(dto);
    return this.responseService.createOne('user', data);
  }

  @Get()
  async findAll() {
    const data = await this.usersService.findAll();
    return this.responseService.findAll('users', data);
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: UserDTO.FindOne.Request) {
    const data = this.usersService.findOne(id);
    return this.responseService.findOne('user', data);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: UserDTO.UpdateOne.Request['id'],
    @Body() dto: UserDTO.UpdateOne.Request,
  ) {
    const data = this.usersService.update(id, dto);
    return this.responseService.updateOne('user', data);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: UserDTO.DeleteOne.Request) {
    this.usersService.remove(id);
    return this.responseService.remove('user', id);
  }
}
