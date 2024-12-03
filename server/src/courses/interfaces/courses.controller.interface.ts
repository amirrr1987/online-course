import {
  CourseCreateRequestDto,
  CourseCreateResponseDto,
  CourseFindAllResponseDto,
  CourseFindByIdRequestIdParamDto,
  CourseFindByIdResponseDto,
  CourseUpdateByIdRequestDto,
  CourseUpdateByIdResponseDto,
  CourseDeleteByIdRequestIdParamDto,
  CourseDeleteByIdResponseDto,
} from '../dto';

export interface IUsersController {
  create(dto: CourseCreateRequestDto): Promise<CourseCreateResponseDto>;
  findAll(): Promise<CourseFindAllResponseDto>;
  findById(
    id: CourseFindByIdRequestIdParamDto,
  ): Promise<CourseFindByIdResponseDto>;
  updateById(
    dto: CourseUpdateByIdRequestDto,
  ): Promise<CourseUpdateByIdResponseDto>;
  deleteById(
    id: CourseDeleteByIdRequestIdParamDto,
  ): Promise<CourseDeleteByIdResponseDto>;
}
