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
  ParseIntPipe,
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
    return await this.rolesService.create(dto);
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
  @StandardResponse({ isPaginated: true })
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
  update(
    @Param('id') id: RoleFindOneRequest,
    @Body() dto: RoleUpdateOneRequest,
  ) {
    return this.rolesService.update(id, dto);
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
