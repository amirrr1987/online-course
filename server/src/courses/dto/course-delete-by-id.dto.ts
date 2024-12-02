import { DtoCourseBase } from './course-base.dto';

export type DtoCourseDeleteByIdRequestParam = DtoCourseBase['id'];
export class DtoCourseDeleteByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
}
