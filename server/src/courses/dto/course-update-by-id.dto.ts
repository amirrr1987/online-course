import { PartialType } from '@nestjs/swagger';
import { DtoCourseBase } from './course-base.dto';
export type DtoCourseUpdateByIdRequestParam = DtoCourseBase['id'];
export class DtoCourseUpdateByIdRequestBody extends PartialType(
  DtoCourseBase,
) {}
export class DtoCourseUpdateByIdResponseBody {}
