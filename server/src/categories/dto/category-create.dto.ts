import { OmitType } from '@nestjs/mapped-types';
import { DtoCategoryBase } from './category-base.dto';
import { ResponseData } from '../../response/response.service.interface';
export class DtoCategoryCreateOneRequestBody extends OmitType(DtoCategoryBase, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class DtoCategoryCreateOneResponseBody extends ResponseData {}
