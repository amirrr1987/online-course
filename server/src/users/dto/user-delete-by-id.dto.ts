import { ResponseData } from 'src/response/response.service.interface';
import { DtoUserBase } from './user-base.dto';

export type DtoUserDeleteByIdRequestParam = DtoUserBase['id'];
export class DtoUserDeleteByIdResponseBody extends ResponseData {}
