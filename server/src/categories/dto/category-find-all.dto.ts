import { ResponseData } from 'src/response/response.service.interface';
import { CategoryBaseDto } from './category-base.dto';

export class CategoryFindAllResponseDto extends ResponseData {
  data?: CategoryBaseDto[];
}
