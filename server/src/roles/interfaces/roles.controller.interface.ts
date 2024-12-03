import {
  RoleCreateRequestDto,
  RoleCreateResponseDto,
  RoleFindAllResponseDto,
  RoleFindByIdRequestIdParamDto,
  RoleFindByIdResponseDto,
  RoleUpdateByIdRequestIdParamDto,
  RoleUpdateByIdRequestDto,
  RoleUpdateByIdResponseDto,
  RoleDeleteByIdRequestIdParamDto,
  RoleDeleteByIdResponseDto,
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
    id: RoleDeleteByIdRequestIdParamDto,
  ): Promise<RoleDeleteByIdResponseDto>;
}
