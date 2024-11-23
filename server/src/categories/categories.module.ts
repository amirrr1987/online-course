import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Category as CategoryEntity } from './category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseService } from 'src/response/response.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoriesController],
  providers: [CategoriesService, ResponseService],
})
export class CategoriesModule {}
