import {
  UserCreateRequestDto,
  UserCreateResponseDto,
  UserFindAllResponseDto,
  UserFindByIdRequestIdParamDto,
  UserFindByIdResponseDto,
  UserUpdateByIdRequestIdParamDto,
  UserUpdateByIdRequestDto,
  UserUpdateByIdResponseDto,
  UserDeleteByIdRequestIdParamDto,
  UserDeleteByIdResponseDto,
} from '../dto';

export interface IUsersController {
  create(dto: UserCreateRequestDto): Promise<UserCreateResponseDto>;
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
