import { OmitType } from '@nestjs/mapped-types';
import { UserBaseDto } from './user-base.dto';
import { ResponseData } from '../../response/response.service.interface';
export class UserCreateRequestDto extends OmitType(UserBaseDto, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class UserCreateResponseDto extends ResponseData {}
