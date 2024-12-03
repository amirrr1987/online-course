import {
  RoleCreateRequestDto,
  RoleCreateResponseDto,
  RoleFindAllResponseDto,
  RoleFindByIdRequestIdParamDto,
  RoleFindByIdResponseDto,
  RoleUpdateByIdRequestIdParamDto,
  RoleUpdateByIdRequestDto,
  RoleUpdateByIdResponseDto,
  RoleRemoveByIdRequestIdParamDto,
  RoleRemoveByIdResponseDto,
} from '../dto';

export interface IRolesController {
  create(dto: RoleCreateRequestDto): Promise<RoleCreateResponseDto>;
  findAll(): Promise<RoleFindAllResponseDto>;
  findById(id: RoleFindByIdRequestIdParamDto): Promise<RoleFindByIdResponseDto>;
  updateById(
    id: RoleUpdateByIdRequestIdParamDto,
    dto: RoleUpdateByIdRequestDto,
  ): Promise<RoleUpdateByIdResponseDto>;
  deleteById(
    id: RoleRemoveByIdRequestIdParamDto,
  ): Promise<RoleRemoveByIdResponseDto>;
}
