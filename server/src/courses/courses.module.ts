import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { ResponseService } from 'src/response/response.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course as CourseEntity } from './entities/course.entity';
import { CoursesRepository } from './courses.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  controllers: [CoursesController],
  providers: [CoursesService, ResponseService, CoursesRepository],
})
export class CoursesModule {}
