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
  CourseCreateRequestDto,
  CourseCreateResponseDto,
  CourseFindAllResponseDto,
  CourseFindByIdRequestIdParamDto,
  CourseFindByIdResponseDto,
  CourseUpdateByIdRequestDto,
  CourseUpdateByIdResponseDto,
  CourseDeleteByIdRequestIdParamDto,
  CourseDeleteByIdResponseDto,
} from './dto';
import { IUsersController } from './interfaces/courses.controller.interface';

@Controller('courses')
export class CoursesController implements IUsersController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(
    @Body() dto: CourseCreateRequestDto,
  ): Promise<CourseCreateResponseDto> {
    return this.coursesService.create(dto);
  }

  @Get()
  findAll(): Promise<CourseFindAllResponseDto> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findById(
    @Param('id', new ParseIntPipe()) id: CourseFindByIdRequestIdParamDto,
  ): Promise<CourseFindByIdResponseDto> {
    return this.coursesService.findById(id);
  }

  @Patch(':id')
  updateById(
    @Body() dto: CourseUpdateByIdRequestDto,
  ): Promise<CourseUpdateByIdResponseDto> {
    return this.coursesService.updateById(dto);
  }

  @Delete(':id')
  deleteById(
    @Param('id', new ParseIntPipe()) id: CourseDeleteByIdRequestIdParamDto,
  ): Promise<CourseDeleteByIdResponseDto> {
    return this.coursesService.deleteById(id);
  }
}
