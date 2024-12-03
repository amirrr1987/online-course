import { ResponseData } from 'src/response/response.service.interface';
import { CourseBaseDto } from './course-base.dto';

export class CourseFindAllResponseDto extends ResponseData {
  data: CourseBaseDto[];
}
