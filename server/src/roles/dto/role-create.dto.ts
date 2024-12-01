import { OmitType } from '@nestjs/mapped-types';
import { DtoRoleBase } from './role-base.dto';

export class DtoRoleCreateOneRequestBody extends OmitType(DtoRoleBase, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class DtoRoleCreateOneResponseBody {
  succuss: boolean;
  status: number;
  message: string;
}
