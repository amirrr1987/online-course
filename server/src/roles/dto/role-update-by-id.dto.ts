import { IntersectionType, OmitType, PartialType } from '@nestjs/mapped-types';
import { RoleBaseDto } from './role-base.dto';
import { ResponseData } from '../../response/response.service.interface';

export type RoleUpdateByIdRequestIdParamDto = RoleBaseDto['id'];

export class RoleUpdateByIdRequestDto extends IntersectionType(
  PartialType(OmitType(RoleBaseDto, ['id', 'created_at', 'updated_at'])),
) {}
export class RoleUpdateByIdResponseDto extends ResponseData {}
