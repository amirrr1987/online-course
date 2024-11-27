import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
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
} from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
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
  @ApiResponse({
    status: 200,
    description: 'Fetched all users successfully.',
    type: IntersectionType(
      PartialType(OmitType(UserDTO.UpdateOne.URequest, ['id'])),
      PickType(UserDTO.UpdateOne.URequest, ['id']),
    ),
  })
  update(@Body() dto: UserDTO.UpdateOne.URequest) {
    return this.usersService.update(dto);
  }

  @Delete(':id')
  @ApiResponse({
    description: 'User has been deleted successfully.',
    type: UserDTO.DeleteOne.DResponse,
  })
  remove(@Param('id', new ParseIntPipe()) id: UserDTO.DeleteOne.DRequest) {
    return this.usersService.remove(id);
  }
}
