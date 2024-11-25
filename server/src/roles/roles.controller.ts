import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleDTO } from './role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() dto: RoleDTO.CreateOne.Request) {
    return this.rolesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'دریافت لیست کاربران' })
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: RoleDTO.FindOne.Request) {
    return this.rolesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: RoleDTO.UpdateOne.Request['id'],
    @Body() dto: RoleDTO.UpdateOne.Request,
  ) {
    return this.rolesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: RoleDTO.DeleteOne.Request) {
    return this.rolesService.remove(id);
  }
}
