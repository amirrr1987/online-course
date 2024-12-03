import { OmitType } from '@nestjs/mapped-types';
import { RoleBaseDto } from './role-base.dto';
import { ResponseData } from 'src/response/response.service.interface';

export class RoleCreateRequestDto extends OmitType(RoleBaseDto, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class RoleCreateResponseDto extends ResponseData {}
