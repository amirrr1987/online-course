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
    return this.responseService.createOne(data);
  }

  @Get()
  async findAll() {
    const data = await this.usersService.findAll();
    return this.responseService.findAll(data);
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
