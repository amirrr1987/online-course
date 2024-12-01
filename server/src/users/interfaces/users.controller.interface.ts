import { StandardParams } from 'nest-standard-response';
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

export interface IUsersController {
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
    id: DtoUserRemoveByIdRequestParam,
  ): Promise<DtoUserRemoveByIdResponseBody>;
}
