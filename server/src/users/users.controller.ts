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
import {
  ApiBody,
  ApiOperation,
  ApiResponse,
  OmitType,
  PartialType,
} from '@nestjs/swagger';

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
  @ApiBody({
    description: 'The data needed to create a new user',
    type: UserDTO.CreateOne.RequestType,
  })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: UserDTO.CreateOne.ResponseType,
  })
  create(@Body() dto: UserDTO.CreateOne.RequestType) {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all users' })
  @ApiResponse({
    status: 200,
    description: 'A list of users.',
    type: UserDTO.GetAll.ResponseType,
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
    type: UserDTO.FindOne.ResponseType,
  })
  findOne(@Param('id', new ParseIntPipe()) id: UserDTO.FindOne.RequestType) {
    return this.usersService.findOne(id);
  }

  @Patch('')
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
    type: UserDTO.UpdateOne.ResponseType,
  })
  @ApiBody({
    description: 'The data needed to create a new user',
    type: PartialType(OmitType(UserDTO.UpdateOne.RequestType, ['id'])),
  })
  update(@Body() dto: UserDTO.UpdateOne.RequestType) {
    return this.usersService.update(dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiResponse({
    description: 'The user has been successfully deleted.',
    type: UserDTO.DeleteOne.ResponseType,
  })
  remove(@Param('id', new ParseIntPipe()) id: UserDTO.DeleteOne.RequestType) {
    return this.usersService.remove(id);
  }
}
