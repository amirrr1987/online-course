import { ResponseData } from 'src/response/response.service.interface';
import { CategoryBaseDto } from './category-base.dto';

export type CategoryDeleteByIdRequestIdParamDto = CategoryBaseDto['id'];
export class CategoryDeleteByIdResponseDto extends ResponseData {}
