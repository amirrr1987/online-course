import {
  UserCreateOneRequestDto,
  UserCreateOneResponseDto,
  UserFindAllResponseDto,
  UserFindByIdRequestIdParamDto,
  UserFindByIdResponseDto,
  UserUpdateByIdRequestIdParamDto,
  UserUpdateByIdRequestDto,
  UserUpdateByIdResponseDto,
  UserDeleteByIdRequestIdParamDto,
  UserDeleteByIdResponseDto,
} from '../dto';

export interface IUsersService {
  create(dto: UserCreateOneRequestDto): Promise<UserCreateOneResponseDto>;
  findAll(): Promise<UserFindAllResponseDto>;
  findById(id: UserFindByIdRequestIdParamDto): Promise<UserFindByIdResponseDto>;
  updateById(
    id: UserUpdateByIdRequestIdParamDto,
    dto: UserUpdateByIdRequestDto,
  ): Promise<UserUpdateByIdResponseDto>;
  deleteById(
    id: UserDeleteByIdRequestIdParamDto,
  ): Promise<UserDeleteByIdResponseDto>;
}
