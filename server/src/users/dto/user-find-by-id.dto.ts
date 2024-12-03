import { ResponseData } from 'src/response/response.service.interface';
import { User } from '../entities/user.entity';
import { DtoUserBase } from './user-base.dto';

export type DtoUserFindByIdRequestParam = DtoUserBase['id'];
export class DtoUserFindByIdResponseBody extends ResponseData {}
