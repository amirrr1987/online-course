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
import { CategoryDTO } from './category.dto';
import { ResponseService } from 'src/response/response.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() dto: CategoryDTO.CreateOne.Request) {
    return this.categoriesService.create(dto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: CategoryDTO.FindOne.Request) {
    return this.categoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: CategoryDTO.UpdateOne.Request['id'],
    @Body() dto: CategoryDTO.UpdateOne.Request,
  ) {
    return this.categoriesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id: CategoryDTO.DeleteOne.Request) {
    return this.categoriesService.remove(id);
  }
}
