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
import { RolesService } from './roles.service';
import { IRolesController } from './interfaces/roles.controller.interface';
import {
  DtoRoleCreateOneRequestBody,
  DtoRoleCreateOneResponseBody,
  DtoRoleFindAllResponseBody,
  DtoRoleFindByIdRequestParam,
  DtoRoleFindByIdResponseBody,
  DtoRoleRemoveByIdRequestParam,
  DtoRoleRemoveByIdResponseBody,
  DtoRoleUpdateByIdRequestBody,
  DtoRoleUpdateByIdRequestParam,
  DtoRoleUpdateByIdResponseBody,
} from './dto';

@Controller('roles')
export class RolesController implements IRolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  create(
    @Body() dto: DtoRoleCreateOneRequestBody,
  ): Promise<DtoRoleCreateOneResponseBody> {
    return this.rolesService.create(dto);
  }

  @Get()
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  findAll(): Promise<DtoRoleFindAllResponseBody> {
    return this.rolesService.findAll();
  }

  @Get(':id')
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  findById(
    @Param('id', new ParseIntPipe()) id: DtoRoleFindByIdRequestParam,
  ): Promise<DtoRoleFindByIdResponseBody> {
    return this.rolesService.findById(id);
  }

  @Patch(':id')
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  updateById(
    @Param('id', new ParseIntPipe()) id: DtoRoleUpdateByIdRequestParam,
    @Body() dto: DtoRoleUpdateByIdRequestBody,
  ): Promise<DtoRoleUpdateByIdResponseBody> {
    return this.rolesService.updateById(id, dto);
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
  deleteById(
    @Param('id', new ParseIntPipe()) id: DtoRoleRemoveByIdRequestParam,
  ): Promise<DtoRoleRemoveByIdResponseBody> {
    return this.rolesService.deleteById(id);
  }
}
