import { Injectable } from '@nestjs/common';
import { CategoryDTO } from './category.dto';
import { Repository } from 'typeorm';
import { Category as CategoryEntity } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}
  async create(dto: CategoryDTO.CreateOne.Request) {
    try {
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
      return await this.categoryRepository.update(id, dto);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async remove(id: CategoryDTO.DeleteOne.Request) {
    try {
      return this.categoryRepository.delete(id);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
