import { IntersectionType, OmitType, PartialType } from '@nestjs/mapped-types';
import { DtoRoleBase } from './base-role.dto';

export type DtoRoleUpdateByIdRequestParam = DtoRoleBase['id'];
export class DtoRoleUpdateByIdRequestBody extends IntersectionType(
  PartialType(OmitType(DtoRoleBase, ['id', 'created_at', 'updated_at'])),
) {}
export class DtoRoleUpdateByIdResponseBody {}
