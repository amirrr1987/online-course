import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: UserDTO.CreateOne.Response,
  })
  create(@Body() dto: UserDTO.CreateOne.Request) {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({
    status: 200,
    description: 'A list of users.',
    type: UserDTO.GetAll.Response,
    isArray: true,
  })
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single user by ID' })
  @ApiResponse({
    status: 200,
    description: 'Details of the requested user.',
    type: UserDTO.FindOne.Response,
  })
  findOne(@Param('id', new ParseIntPipe()) id: UserDTO.FindOne.Request) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
    type: UserDTO.UpdateOne.Response,
  })
  update(
    @Param('id', new ParseIntPipe()) id: UserDTO.UpdateOne.Request['id'],
    @Body() dto: UserDTO.UpdateOne.Request,
  ) {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully deleted.',
    type: UserDTO.DeleteOne.Response,
  })
  remove(@Param('id', new ParseIntPipe()) id: UserDTO.DeleteOne.Request) {
    return this.usersService.remove(id);
  }
}
