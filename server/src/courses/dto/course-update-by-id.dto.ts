import { PartialType } from '@nestjs/swagger';
import { CourseBaseDto } from './course-base.dto';
import { ResponseData } from '../../response/response.service.interface';
export type CourseUpdateByIdRequestIdParamDto = CourseBaseDto['id'];
export class CourseUpdateByIdRequestDto extends PartialType(CourseBaseDto) {}
export class CourseUpdateByIdResponseDto extends ResponseData {}
