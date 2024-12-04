import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ICategoriesService } from './interfaces/categories.service.interface';
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
} from './dto';
import { ResponseService } from '../response/response.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Category as CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService implements ICategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    private readonly responseService: ResponseService,
  ) {}
  async create(
    dto: CategoryCreateRequestDto,
  ): Promise<CategoryCreateResponseDto> {
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
  async findAll(): Promise<CategoryFindAllResponseDto> {
    const categories = await this.categoryRepository.find();
    return {
      success: true,
      status: 200,
      message: 'Courses retrieved successfully',
      data: categories,
    };
  }
  async findById(
    id: CategoryFindByIdRequestIdParamDto,
  ): Promise<CategoryFindByIdResponseDto> {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException('Category not found.');
    }
    return {
      success: true,
      message: '',
      status: 201,
      data: category,
    };
  }
  async updateById(
    id: CategoryUpdateByIdRequestIdParamDto,
    dto: CategoryUpdateByIdRequestDto,
  ): Promise<CategoryUpdateByIdResponseDto> {
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
      success: true,
      message: '',
      status: 201,
    };
  }
  async deleteById(
    id: CategoryDeleteByIdRequestIdParamDto,
  ): Promise<CategoryDeleteByIdResponseDto> {
    const result = await this.categoryRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Category with this ID not found.');
    }
    return {
      success: true,
      message: '',
      status: 201,
    };
  }
}
