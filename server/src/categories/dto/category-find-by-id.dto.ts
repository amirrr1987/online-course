import { Category } from '../entities/category.entity';
import { DtoCategoryBase } from './category-base.dto';

export type DtoCategoryFindByIdRequestParam = DtoCategoryBase['id'];
export class DtoCategoryFindByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
  data: Category;
}
