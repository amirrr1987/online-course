import {
  DtoCourseCreateOneRequestBody,
  DtoCourseCreateOneResponseBody,
  DtoCourseFindAllResponseBody,
  DtoCourseFindByIdRequestParam,
  DtoCourseFindByIdResponseBody,
  DtoCourseUpdateByIdRequestParam,
  DtoCourseUpdateByIdRequestBody,
  DtoCourseUpdateByIdResponseBody,
  DtoCourseDeleteByIdRequestParam,
  DtoCourseDeleteByIdResponseBody,
} from '../dto';

export interface IUsersController {
  create(
    dto: DtoCourseCreateOneRequestBody,
  ): Promise<DtoCourseCreateOneResponseBody>;
  findAll(): Promise<DtoCourseFindAllResponseBody>;
  findById(
    id: DtoCourseFindByIdRequestParam,
  ): Promise<DtoCourseFindByIdResponseBody>;
  updateById(
    id: DtoCourseUpdateByIdRequestParam,
    dto: DtoCourseUpdateByIdRequestBody,
  ): Promise<DtoCourseUpdateByIdResponseBody>;
  deleteById(
    id: DtoCourseDeleteByIdRequestParam,
  ): Promise<DtoCourseDeleteByIdResponseBody>;
}
