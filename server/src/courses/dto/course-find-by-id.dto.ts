import { ResponseData } from '../../response/response.service.interface';
import { CourseBaseDto } from './course-base.dto';

export type CourseFindByIdRequestIdParamDto = CourseBaseDto['id'];
export class CourseFindByIdResponseDto extends ResponseData {
  data?: CourseBaseDto;
}
