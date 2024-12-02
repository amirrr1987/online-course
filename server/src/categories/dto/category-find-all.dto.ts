import { Category } from '../entities/category.entity';
import { DtoCategoryBase } from './category-base.dto';

export class DtoCategoryFindAllResponseBody {
  succuss: boolean;
  status: number;
  message: string;
  data: Array<Category>;
}
