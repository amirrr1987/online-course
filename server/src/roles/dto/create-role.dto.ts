import { OmitType } from '@nestjs/mapped-types';
import { DtoRoleBase } from './base-role.dto';

export class DtoRoleCreateOneRequestBody extends OmitType(DtoRoleBase, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class DtoRoleCreateOneResponseBody {}
