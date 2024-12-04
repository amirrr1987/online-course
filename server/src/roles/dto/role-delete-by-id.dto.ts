import { ResponseData } from '../../response/response.service.interface';
import { RoleBaseDto } from './role-base.dto';

export type RoleDeleteByIdRequestIdParamDto = RoleBaseDto['id'];

export class RoleDeleteByIdResponseDto extends ResponseData {}
