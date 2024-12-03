import { OmitType } from '@nestjs/mapped-types';
import { UserBaseDto } from './user-base.dto';
import { ResponseData } from '../../response/response.service.interface';
export class UserCreateOneRequestDto extends OmitType(UserBaseDto, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class UserCreateOneResponseDto extends ResponseData {}
