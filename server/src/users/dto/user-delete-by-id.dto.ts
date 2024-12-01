import { DtoUserBase } from './user-base.dto';

export type DtoUserRemoveByIdRequestParam = DtoUserBase['id'];
export class DtoUserRemoveByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
}
