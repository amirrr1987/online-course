import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUsersController } from './interfaces/users.controller.interface';
import {
  DtoUserCreateOneRequestBody,
  DtoUserCreateOneResponseBody,
  DtoUserFindAllResponseBody,
  DtoUserFindByIdRequestParam,
  DtoUserFindByIdResponseBody,
  DtoUserUpdateByIdRequestParam,
  DtoUserUpdateByIdRequestBody,
  DtoUserUpdateByIdResponseBody,
  DtoUserDeleteByIdRequestParam,
  DtoUserDeleteByIdResponseBody,
} from './dto';

@Controller('users')
export class UsersController implements IUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(
    @Body() dto: DtoUserCreateOneRequestBody,
  ): Promise<DtoUserCreateOneResponseBody> {
    return this.usersService.create(dto);
  }

  @Get()
  findAll(): Promise<DtoUserFindAllResponseBody> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(
    @Param('id') id: DtoUserFindByIdRequestParam,
  ): Promise<DtoUserFindByIdResponseBody> {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  updateById(
    @Param('id') id: DtoUserUpdateByIdRequestParam,
    @Body() dto: DtoUserUpdateByIdRequestBody,
  ): Promise<DtoUserUpdateByIdResponseBody> {
    return this.usersService.update(+id, dto);
  }

  @Delete(':id')
  deleteById(
    @Param('id') id: DtoUserDeleteByIdRequestParam,
  ): Promise<DtoUserDeleteByIdResponseBody> {
    return this.usersService.remove(+id);
  }
}
