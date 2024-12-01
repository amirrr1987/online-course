import { PartialType } from '@nestjs/swagger';
import { DtoUserBase } from './user-base.dto';
export type DtoUserUpdateByIdRequestParam = DtoUserBase['id'];
export class DtoUserUpdateByIdRequestBody extends PartialType(DtoUserBase) {}
export class DtoUserUpdateByIdResponseBody {}
