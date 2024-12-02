import { PartialType } from '@nestjs/swagger';
import { DtoCategoryBase } from './category-base.dto';
export type DtoCategoryUpdateByIdRequestParam = DtoCategoryBase['id'];
export class DtoCategoryUpdateByIdRequestBody extends PartialType(
  DtoCategoryBase,
) {}
export class DtoCategoryUpdateByIdResponseBody {}
