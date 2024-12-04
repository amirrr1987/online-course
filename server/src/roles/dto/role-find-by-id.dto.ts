import { ResponseData } from '../../response/response.service.interface';
import { RoleBaseDto } from './role-base.dto';

export type RoleFindByIdRequestIdParamDto = RoleBaseDto['id'];
export class RoleFindByIdResponseDto extends ResponseData {
  data?: RoleBaseDto;
}
