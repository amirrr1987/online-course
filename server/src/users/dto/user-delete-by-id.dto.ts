import { ResponseData } from '../../response/response.service.interface';
import { UserBaseDto } from './user-base.dto';

export type UserDeleteByIdRequestIdParamDto = UserBaseDto['id'];
export class UserDeleteByIdResponseDto extends ResponseData {}
