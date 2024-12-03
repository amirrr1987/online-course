import { PartialType } from '@nestjs/swagger';
import { DtoUserBase } from './user-base.dto';
import { ResponseData } from 'src/response/response.service.interface';
export type DtoUserUpdateByIdRequestParam = DtoUserBase['id'];
export class DtoUserUpdateByIdRequestBody extends PartialType(DtoUserBase) {}
export class DtoUserUpdateByIdResponseBody extends ResponseData {}
