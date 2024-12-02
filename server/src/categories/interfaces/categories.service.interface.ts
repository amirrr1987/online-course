import {
  DtoCategoryCreateOneRequestBody,
  DtoCategoryCreateOneResponseBody,
  DtoCategoryFindAllResponseBody,
  DtoCategoryFindByIdRequestParam,
  DtoCategoryFindByIdResponseBody,
  DtoCategoryUpdateByIdRequestParam,
  DtoCategoryUpdateByIdRequestBody,
  DtoCategoryUpdateByIdResponseBody,
  DtoCategoryDeleteByIdRequestParam,
  DtoCategoryDeleteByIdResponseBody,
} from '../dto';

export interface ICategoriesService {
  create(
    dto: DtoCategoryCreateOneRequestBody,
  ): Promise<DtoCategoryCreateOneResponseBody>;
  findAll(): Promise<DtoCategoryFindAllResponseBody>;
  findById(
    id: DtoCategoryFindByIdRequestParam,
  ): Promise<DtoCategoryFindByIdResponseBody>;
  updateById(
    id: DtoCategoryUpdateByIdRequestParam,
    dto: DtoCategoryUpdateByIdRequestBody,
  ): Promise<DtoCategoryUpdateByIdResponseBody>;
  deleteById(
    id: DtoCategoryDeleteByIdRequestParam,
  ): Promise<DtoCategoryDeleteByIdResponseBody>;
}
