import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CourseDTO } from './course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  create(@Body() dto: CourseDTO.CreateOne.Request) {
    return this.coursesService.create(dto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  findOne(@Param('id', new ParseIntPipe()) id: CourseDTO.FindOne.Request) {
    return this.coursesService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  update(
    @Param('id', new ParseIntPipe()) id: CourseDTO.UpdateOne.Request['id'],
    @Body() dto: CourseDTO.UpdateOne.Request,
  ) {
    return this.coursesService.update(id, dto);
  }

  @Delete(':id')
  @UsePipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )
  remove(@Param('id', new ParseIntPipe()) id: CourseDTO.DeleteOne.Request) {
    return this.coursesService.remove(id);
  }
}
