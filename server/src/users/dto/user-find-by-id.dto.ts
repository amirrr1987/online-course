import { ResponseData } from '../../response/response.service.interface';
import { UserBaseDto } from './user-base.dto';

export type UserFindByIdRequestIdParamDto = UserBaseDto['id'];
export class UserFindByIdResponseDto extends ResponseData {}
