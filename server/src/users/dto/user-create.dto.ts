import { OmitType } from '@nestjs/mapped-types';
import { DtoUserBase } from './user-base.dto';

export class DtoUserCreateOneRequestBody extends OmitType(DtoUserBase, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class DtoUserCreateOneResponseBody {
  succuss: boolean;
  status: number;
  message: string;
}
