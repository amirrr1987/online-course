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
  RoleCreateRequestDto,
  RoleCreateResponseDto,
  RoleFindAllResponseDto,
  RoleFindByIdRequestIdParamDto,
  RoleFindByIdResponseDto,
  RoleDeleteByIdRequestIdParamDto,
  RoleDeleteByIdResponseDto,
  RoleUpdateByIdRequestDto,
  RoleUpdateByIdResponseDto,
  RoleUpdateByIdRequestIdParamDto,
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
  create(@Body() dto: RoleCreateRequestDto): Promise<RoleCreateResponseDto> {
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
  findAll(): Promise<RoleFindAllResponseDto> {
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
    @Param('id', new ParseIntPipe()) id: RoleFindByIdRequestIdParamDto,
  ): Promise<RoleFindByIdResponseDto> {
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
    @Param('id', new ParseIntPipe()) id: RoleUpdateByIdRequestIdParamDto,
    @Body() dto: RoleUpdateByIdRequestDto,
  ): Promise<RoleUpdateByIdResponseDto> {
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
    @Param('id', new ParseIntPipe()) id: RoleDeleteByIdRequestIdParamDto,
  ): Promise<RoleDeleteByIdResponseDto> {
    return this.rolesService.deleteById(id);
  }
}
