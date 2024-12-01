import { DtoUserBase } from './user-base.dto';

export type DtoUserDeleteByIdRequestParam = DtoUserBase['id'];
export class DtoUserDeleteByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
}
