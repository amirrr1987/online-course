import { DtoRoleBase } from './role-base.dto';

export type DtoRoleFindByIdRequestParam = DtoRoleBase['id'];
export class DtoRoleFindByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
  data: DtoRoleBase;
}
