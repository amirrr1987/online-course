import { ResponseData } from 'src/response/response.service.interface';
import { CourseBaseDto } from './course-base.dto';
import { OmitType } from '@nestjs/mapped-types';

export type CourseDeleteByIdRequestIdParamDto = CourseBaseDto['id'];
export class CourseDeleteByIdResponseDto extends OmitType(ResponseData, [
  'data',
]) {}
