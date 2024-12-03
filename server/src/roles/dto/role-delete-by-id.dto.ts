import { ResponseData } from 'src/response/response.service.interface';
import { RoleBaseDto } from './role-base.dto';

export type RoleRemoveByIdRequestIdParamDto = RoleBaseDto['id'];

export class RoleRemoveByIdResponseDto extends ResponseData {}
