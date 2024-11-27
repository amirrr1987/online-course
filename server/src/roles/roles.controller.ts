import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import {
  RoleCreateOneRequest,
  RoleCreateOneResponse,
  RoleDeleteOneRequest,
  RoleDeleteOneResponse,
  RoleFindOneRequest,
  RoleFindOneResponse,
  RoleGetAllResponse,
  RoleUpdateOneRequest,
} from './dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseService } from 'src/response/response.service';
import { StandardResponse } from 'nest-standard-response';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(
    private readonly rolesService: RolesService,
    private readonly responseService: ResponseService,
  ) {}

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
    description: 'Role has been created successfully.',
    type: RoleCreateOneResponse,
  })
  async create(@Body() dto: RoleCreateOneRequest) {
    const data = await this.rolesService.create(dto);
    // return this.responseService.createOne('role', data.id);
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
  @ApiResponse({
    status: 200,
    description: 'Roles has been fetch successfully.',
    type: RoleGetAllResponse,
    isArray: true,
  })
  findAll() {
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
  @ApiResponse({
    status: 200,
    description: 'Roles has been fetch successfully.',
    type: RoleFindOneResponse,
  })
  findOne(@Param('id') id: RoleFindOneRequest) {
    return this.rolesService.findOne(id);
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
  @ApiResponse({
    status: 200,
    description: 'Roles has been fetch successfully.',
    // type: RoleUpdateResponse,
  })
  update(@Body() dto: RoleUpdateOneRequest) {
    return this.rolesService.update(dto);
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
    status: 200,
    description: 'Roles has been fetch successfully.',
    type: RoleDeleteOneResponse,
  })
  remove(@Param('id') id: RoleDeleteOneRequest) {
    return this.rolesService.remove(id);
  }
}
