import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category as CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoriesRepository extends Repository<CategoryEntity> {}
