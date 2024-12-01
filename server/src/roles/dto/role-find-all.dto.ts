import { DtoRoleBase } from './role-base.dto';

export class DtoRoleFindAllResponseBody {
  succuss: boolean;
  status: number;
  message: string;
  data: Array<DtoRoleBase>;
}
