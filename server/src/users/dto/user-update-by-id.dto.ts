import { PartialType } from '@nestjs/swagger';
import { UserBaseDto } from './user-base.dto';
import { ResponseData } from '../../response/response.service.interface';
export type UserUpdateByIdRequestIdParamDto = UserBaseDto['id'];

export class UserUpdateByIdRequestDto extends PartialType(UserBaseDto) {}

export class UserUpdateByIdResponseDto extends ResponseData {}
