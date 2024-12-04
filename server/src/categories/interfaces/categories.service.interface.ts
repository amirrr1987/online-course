import {
  CategoryCreateRequestDto,
  CategoryCreateResponseDto,
  CategoryFindAllResponseDto,
  CategoryFindByIdRequestIdParamDto,
  CategoryFindByIdResponseDto,
  CategoryUpdateByIdRequestIdParamDto,
  CategoryUpdateByIdRequestDto,
  CategoryUpdateByIdResponseDto,
  CategoryDeleteByIdRequestIdParamDto,
  CategoryDeleteByIdResponseDto,
} from '../dto';

export interface ICategoriesService {
  create(dto: CategoryCreateRequestDto): Promise<CategoryCreateResponseDto>;
  findAll(): Promise<CategoryFindAllResponseDto>;
  findById(
    id: CategoryFindByIdRequestIdParamDto,
  ): Promise<CategoryFindByIdResponseDto>;
  updateById(
    id: CategoryUpdateByIdRequestIdParamDto,
    dto: CategoryUpdateByIdRequestDto,
  ): Promise<CategoryUpdateByIdResponseDto>;
  deleteById(
    id: CategoryDeleteByIdRequestIdParamDto,
  ): Promise<CategoryDeleteByIdResponseDto>;
}
