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
import { CoursesService } from './courses.service';
import {
  DtoCourseCreateOneRequestBody,
  DtoCourseCreateOneResponseBody,
  DtoCourseDeleteByIdRequestParam,
  DtoCourseDeleteByIdResponseBody,
  DtoCourseFindAllResponseBody,
  DtoCourseFindByIdRequestParam,
  DtoCourseFindByIdResponseBody,
  DtoCourseUpdateByIdRequestBody,
  DtoCourseUpdateByIdRequestParam,
  DtoCourseUpdateByIdResponseBody,
} from './dto';
import { IUsersController } from './interfaces/courses.controller.interface';

@Controller('courses')
export class CoursesController implements IUsersController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(
    @Body() dto: DtoCourseCreateOneRequestBody,
  ): Promise<DtoCourseCreateOneResponseBody> {
    return this.coursesService.create(dto);
  }

  @Get()
  findAll(): Promise<DtoCourseFindAllResponseBody> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findById(
    @Param('id', new ParseIntPipe()) id: DtoCourseFindByIdRequestParam,
  ): Promise<DtoCourseFindByIdResponseBody> {
    return this.coursesService.findById(id);
  }

  @Patch(':id')
  updateById(
    @Param('id', new ParseIntPipe()) id: DtoCourseUpdateByIdRequestParam,
    @Body() dto: DtoCourseUpdateByIdRequestBody,
  ): Promise<DtoCourseUpdateByIdResponseBody> {
    return this.coursesService.updateById(id, dto);
  }

  @Delete(':id')
  deleteById(
    @Param('id', new ParseIntPipe()) id: DtoCourseDeleteByIdRequestParam,
  ): Promise<DtoCourseDeleteByIdResponseBody> {
    return this.coursesService.deleteById(id);
  }
}
