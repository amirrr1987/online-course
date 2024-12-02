import { DtoCategoryBase } from './category-base.dto';

export type DtoCategoryDeleteByIdRequestParam = DtoCategoryBase['id'];
export class DtoCategoryDeleteByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
}
