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
  ApiResponse,
  OmitType,
  PartialType,
  IntersectionType,
  PickType,
  ApiBody,
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
  @ApiResponse({
    status: 201,
    description: 'User has been created successfully.',
    type: UserDTO.CreateOne.CResponse,
  })
  create(@Body() dto: UserDTO.CreateOne.CRequest) {
    return this.usersService.create(dto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Fetched all users successfully.',
    type: UserDTO.GetAll.GResponse,
  })
  async findAll() {
    return this.usersService.findAll();
  }

  @Patch()
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  @ApiBody({
    type: IntersectionType(
      PartialType(OmitType(UserDTO.UpdateOne.URequest, ['id'])),
      PickType(UserDTO.UpdateOne.URequest, ['id']),
    ),
  })
  @ApiResponse({
    type: UserDTO.UpdateOne.UResponse,
  })
  update(@Body() dto: UserDTO.UpdateOne.URequest) {
    return this.usersService.update(dto);
  }

  @Delete(':id')
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  @ApiResponse({
    description: 'User has been deleted successfully.',
    type: UserDTO.DeleteOne.DResponse,
  })
  remove(@Param('id', new ParseIntPipe()) id: UserDTO.DeleteOne.DRequest) {
    return this.usersService.remove(id);
  }
}
