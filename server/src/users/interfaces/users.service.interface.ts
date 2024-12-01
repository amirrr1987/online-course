import {
  DtoUserCreateOneRequestBody,
  DtoUserCreateOneResponseBody,
  DtoUserFindAllResponseBody,
  DtoUserFindByIdRequestParam,
  DtoUserFindByIdResponseBody,
  DtoUserUpdateByIdRequestParam,
  DtoUserUpdateByIdRequestBody,
  DtoUserUpdateByIdResponseBody,
  DtoUserRemoveByIdRequestParam,
  DtoUserRemoveByIdResponseBody,
} from '../dto';

export interface IUsersService {
  create(
    dto: DtoRoleCreateOneRequestBody,
  ): Promise<DtoRoleCreateOneResponseBody>;
  findAll(): Promise<DtoRoleFindAllResponseBody>;
  findById(
    id: DtoRoleFindByIdRequestParam,
  ): Promise<DtoRoleFindByIdResponseBody>;
  updateById(
    id: DtoRoleUpdateByIdRequestParam,
    dto: DtoRoleUpdateByIdRequestBody,
  ): Promise<DtoRoleUpdateByIdResponseBody>;
  deleteById(
    id: DtoRoleRemoveByIdRequestParam,
  ): Promise<DtoRoleRemoveByIdResponseBody>;
}
