import { User } from '../entities/user.entity';
import { DtoUserBase } from './user-base.dto';

export type DtoUserFindByIdRequestParam = DtoUserBase['id'];
export class DtoUserFindByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
  data: User;
}
