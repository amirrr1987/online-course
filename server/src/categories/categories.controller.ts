import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ICategoriesController } from './interfaces/categories.controller.interface';
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

@Controller('categories')
export class CategoriesController implements ICategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(
    @Body() dto: CategoryCreateRequestDto,
  ): Promise<CategoryCreateResponseDto> {
    return this.categoriesService.create(dto);
  }

  @Get()
  findAll(): Promise<CategoryFindAllResponseDto> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findById(
    @Param('id', new ParseIntPipe()) id: CategoryFindByIdRequestIdParamDto,
  ): Promise<CategoryFindByIdResponseDto> {
    return this.categoriesService.findById(id);
  }

  @Patch(':id')
  updateById(
    @Param('id', new ParseIntPipe()) id: CategoryUpdateByIdRequestIdParamDto,
    @Body() dto: CategoryUpdateByIdRequestDto,
  ): Promise<CategoryUpdateByIdResponseDto> {
    return this.categoriesService.updateById(id, dto);
  }

  @Delete(':id')
  deleteById(
    @Param('id', new ParseIntPipe()) id: CategoryDeleteByIdRequestIdParamDto,
  ): Promise<CategoryDeleteByIdResponseDto> {
    return this.categoriesService.deleteById(id);
  }
}
