import { OmitType } from '@nestjs/mapped-types';
import { DtoUserBase } from './course-base.dto';
import { ResponseData } from '../../response/response.service.interface';
export class DtoUserCreateOneRequestBody extends OmitType(DtoUserBase, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class DtoUserCreateOneResponseBody extends ResponseData {}
