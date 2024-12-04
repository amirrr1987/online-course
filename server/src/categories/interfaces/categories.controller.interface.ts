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

export interface ICategoriesController {
  /**
   * Creates a new category.
   * @param dto - Data Transfer Object for creating a category
   * @returns The created category response DTO
   */
  create(dto: CategoryCreateRequestDto): Promise<CategoryCreateResponseDto>;

  /**
   * Retrieves all categories.
   * @returns List of all categories
   */
  findAll(): Promise<CategoryFindAllResponseDto>;

  /**
   * Finds a category by its ID.
   * @param id - The ID of the category
   * @returns The category found
   */
  findById(
    id: CategoryFindByIdRequestIdParamDto,
  ): Promise<CategoryFindByIdResponseDto>;

  /**
   * Updates a category by its ID.
   * @param id - The ID of the category
   * @param dto - DTO containing updated data
   * @returns The updated category
   */
  updateById(
    id: CategoryUpdateByIdRequestIdParamDto,
    dto: CategoryUpdateByIdRequestDto,
  ): Promise<CategoryUpdateByIdResponseDto>;

  /**
   * Deletes a category by its ID.
   * @param id - The ID of the category
   * @returns The result of the deletion
   */
  deleteById(
    id: CategoryDeleteByIdRequestIdParamDto,
  ): Promise<CategoryDeleteByIdResponseDto>;
}
