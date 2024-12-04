import { ResponseData } from '../../response/response.service.interface';
import { CategoryBaseDto } from './category-base.dto';

export type CategoryFindByIdRequestIdParamDto = CategoryBaseDto['id'];
export class CategoryFindByIdResponseDto extends ResponseData {
  data?: CategoryBaseDto;
}
