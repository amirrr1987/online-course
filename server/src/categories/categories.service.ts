import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ICategoriesService } from './interfaces/categories.service.interface';
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
} from './dto';
import { ResponseService } from 'src/response/response.service';
import { CategoriesRepository } from './categories.repository';

@Injectable()
export class CategoriesService implements ICategoriesService {
  constructor(
    private readonly categoryRepository: CategoriesRepository,
    private readonly responseService: ResponseService,
  ) {}
  async create(
    dto: DtoCategoryCreateOneRequestBody,
  ): Promise<DtoCategoryCreateOneResponseBody> {
    const existingCategory = await this.categoryRepository.findOneBy({
      value: dto.value,
    });
    if (existingCategory) {
      throw new ConflictException(
        'Course with the provided value already exists.',
      );
    }
    const category = this.categoryRepository.create(dto);
    await this.categoryRepository.save(category);
    return this.responseService.createOne('user', category.id);
  }
  async findAll(): Promise<DtoCategoryFindAllResponseBody> {
    const categories = await this.categoryRepository.find();
    return {
      succuss: true,
      status: 200,
      message: 'Courses retrieved successfully',
      data: categories,
    };
  }
  async findById(
    id: DtoCategoryFindByIdRequestParam,
  ): Promise<DtoCategoryFindByIdResponseBody> {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException('Category not found.');
    }
    return {
      succuss: true,
      message: '',
      status: 201,
      data: category,
    };
  }
  async updateById(
    id: DtoCategoryUpdateByIdRequestParam,
    dto: DtoCategoryUpdateByIdRequestBody,
  ): Promise<DtoCategoryUpdateByIdResponseBody> {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category.id) {
      throw new NotFoundException('Category not found.');
    }
    if (dto.value) {
      const duplicateCategory = await this.categoryRepository.findOneBy({
        value: dto.value,
      });
      if (duplicateCategory && duplicateCategory.id !== id) {
        throw new ConflictException(
          'Category with the provided value already exists.',
        );
      }
    }
    const updatedData = {
      ...dto,
      updated_at: new Date(),
    };

    await this.categoryRepository.update(id, updatedData);
    return {
      succuss: true,
      message: '',
      status: 201,
    };
  }
  async deleteById(
    id: DtoCategoryDeleteByIdRequestParam,
  ): Promise<DtoCategoryDeleteByIdResponseBody> {
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Category with this ID not found.');
    }
    return {
      succuss: true,
      message: '',
      status: 201,
    };
  }
}
