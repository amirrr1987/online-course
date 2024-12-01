import { User } from '../entities/user.entity';
import { DtoUserBase } from './user-base.dto';

export class DtoUserFindAllResponseBody {
  succuss: boolean;
  status: number;
  message: string;
  data: Array<User>;
}
