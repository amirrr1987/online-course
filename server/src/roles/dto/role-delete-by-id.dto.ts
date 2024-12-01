import { DtoRoleBase } from './role-base.dto';

export type DtoRoleRemoveByIdRequestParam = DtoRoleBase['id'];
export class DtoRoleRemoveByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
}
