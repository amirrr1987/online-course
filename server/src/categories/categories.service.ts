import { Injectable } from '@nestjs/common';
import { CategoryDTO } from './category.dto';
import { Repository } from 'typeorm';
import { Category as CategoryEntity } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { pick } from 'lodash';
import { ResponseService } from 'src/response/response.service';
@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    private readonly responseService: ResponseService,
  ) {}
  async create(dto: CategoryDTO.CreateOne.Request) {
    try {
      const existingCategory = await this.categoryRepository.findOne({
        where: { value: dto.value },
      });
      if (existingCategory) {
        throw new Error('Category with this name already exists.');
      }
      return await this.categoryRepository.save(dto);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async findAll() {
    try {
      return await this.categoryRepository.find();
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async findOne(id: CategoryDTO.FindOne.Request) {
    try {
      return await this.categoryRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async update(
    id: CategoryDTO.UpdateOne.Request['id'],
    dto: CategoryDTO.UpdateOne.Request,
  ) {
    try {
      const result = await this.categoryRepository.update(id, dto);
      if (result.affected === 0) {
        return this.responseService.notFound('category', id);
      }
      return this.responseService.updateOne('category', id);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async remove(id: CategoryDTO.DeleteOne.Request) {
    try {
      const result = await this.categoryRepository.delete(id);
      if (result.affected === 0) {
        return this.responseService.notFound('category', id);
      }
      return this.responseService.remove('category', id);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
