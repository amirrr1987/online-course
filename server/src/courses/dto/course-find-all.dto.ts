import { ResponseData } from '../../response/response.service.interface';
import { Course as CourseEntity } from '../entities/course.entity';

export class CourseFindAllResponseDto extends ResponseData {
  data: CourseEntity[];
}
