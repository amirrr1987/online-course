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
} from '../dto';

export interface IUsersService {
  create(
    dto: DtoUserCreateOneRequestBody,
  ): Promise<DtoUserCreateOneResponseBody>;
  findAll(): Promise<DtoUserFindAllResponseBody>;
  findById(
    id: DtoUserFindByIdRequestParam,
  ): Promise<DtoUserFindByIdResponseBody>;
  updateById(
    id: DtoUserUpdateByIdRequestParam,
    dto: DtoUserUpdateByIdRequestBody,
  ): Promise<DtoUserUpdateByIdResponseBody>;
  deleteById(
    id: DtoUserDeleteByIdRequestParam,
  ): Promise<DtoUserDeleteByIdResponseBody>;
}
