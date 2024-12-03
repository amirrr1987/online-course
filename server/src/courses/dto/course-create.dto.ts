import { OmitType } from '@nestjs/mapped-types';
import { CourseBaseDto } from './course-base.dto';
import { ResponseData } from '../../response/response.service.interface';
export class CourseCreateRequestDto extends OmitType(CourseBaseDto, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class CourseCreateResponseDto extends ResponseData {}
