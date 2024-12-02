import { Course } from '../entities/course.entity';
import { DtoCourseBase } from './course-base.dto';

export type DtoCourseFindByIdRequestParam = DtoCourseBase['id'];
export class DtoCourseFindByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
  data: Course;
}
