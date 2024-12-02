import { OmitType } from '@nestjs/mapped-types';
import { DtoCourseBase } from './course-base.dto';
import { ResponseData } from '../../response/response.service.interface';
export class DtoCourseCreateOneRequestBody extends OmitType(DtoCourseBase, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class DtoCourseCreateOneResponseBody extends ResponseData {}
