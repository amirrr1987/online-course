import { Course } from '../entities/course.entity';
import { DtoCourseBase } from './course-base.dto';

export class DtoCourseFindAllResponseBody {
  succuss: boolean;
  status: number;
  message: string;
  data: Array<Course>;
}
