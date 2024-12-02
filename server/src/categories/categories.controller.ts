import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ICategoriesController } from './interfaces/categories.controller.interface';
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

@Controller('categories')
export class CategoriesController implements ICategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(
    @Body() dto: DtoCategoryCreateOneRequestBody,
  ): Promise<DtoCategoryCreateOneResponseBody> {
    return this.categoriesService.create(dto);
  }

  @Get()
  findAll(): Promise<DtoCategoryFindAllResponseBody> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findById(
    @Param('id', new ParseIntPipe()) id: DtoCategoryFindByIdRequestParam,
  ): Promise<DtoCategoryFindByIdResponseBody> {
    return this.categoriesService.findById(id);
  }

  @Patch(':id')
  updateById(
    @Param('id', new ParseIntPipe()) id: DtoCategoryUpdateByIdRequestParam,
    @Body() dto: DtoCategoryUpdateByIdRequestBody,
  ): Promise<DtoCategoryUpdateByIdResponseBody> {
    return this.categoriesService.updateById(id, dto);
  }

  @Delete(':id')
  deleteById(
    @Param('id', new ParseIntPipe()) id: DtoCategoryDeleteByIdRequestParam,
  ): Promise<DtoCategoryDeleteByIdResponseBody> {
    return this.categoriesService.deleteById(id);
  }
}
