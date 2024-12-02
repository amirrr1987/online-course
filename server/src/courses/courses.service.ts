import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ICoursesService } from './interfaces/courses.service.interface';
import {
  DtoCourseCreateOneRequestBody,
  DtoCourseCreateOneResponseBody,
  DtoCourseFindAllResponseBody,
  DtoCourseFindByIdRequestParam,
  DtoCourseFindByIdResponseBody,
  DtoCourseUpdateByIdRequestParam,
  DtoCourseUpdateByIdRequestBody,
  DtoCourseUpdateByIdResponseBody,
  DtoCourseDeleteByIdRequestParam,
  DtoCourseDeleteByIdResponseBody,
} from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course as CourseEntity } from './entities/course.entity';
import { ResponseService } from 'src/response/response.service';

@Injectable()
export class CoursesService implements ICoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
    private readonly responseService: ResponseService,
  ) {}
  async create(
    dto: DtoCourseCreateOneRequestBody,
  ): Promise<DtoCourseCreateOneResponseBody> {
    const existingCourse = await this.courseRepository.findOneBy({
      value: dto.value,
    });
    if (existingCourse) {
      throw new ConflictException(
        'Course with the provided value already exists.',
      );
    }
    const course = this.courseRepository.create(dto);
    await this.courseRepository.save(course);
    return this.responseService.createOne('user', course.id);
  }
  async findAll(): Promise<DtoCourseFindAllResponseBody> {
    const courses = await this.courseRepository.find();
    return {
      succuss: true,
      status: 200,
      message: 'Courses retrieved successfully',
      data: courses,
    };
  }
  async findById(
    id: DtoCourseFindByIdRequestParam,
  ): Promise<DtoCourseFindByIdResponseBody> {
    const course = await this.courseRepository.findOneBy({ id });
    if (!course) {
      throw new NotFoundException('Course not found.');
    }
    return {
      succuss: true,
      message: '',
      status: 201,
      data: course,
    };
  }
  async updateById(
    id: DtoCourseUpdateByIdRequestParam,
    dto: DtoCourseUpdateByIdRequestBody,
  ): Promise<DtoCourseUpdateByIdResponseBody> {
    const course = await this.courseRepository.findOneBy({ id });
    if (!course.id) {
      throw new NotFoundException('Course not found.');
    }
    if (dto.value) {
      const duplicateCourse = await this.courseRepository.findOneBy({
        value: dto.value,
      });
      if (duplicateCourse && duplicateCourse.id !== id) {
        throw new ConflictException(
          'Course with the provided value already exists.',
        );
      }
    }
    const updatedData = {
      ...dto,
      updated_at: new Date(),
    };

    await this.courseRepository.update(id, updatedData);
    return {
      succuss: true,
      message: '',
      status: 201,
    };
  }
  async deleteById(
    id: DtoCourseDeleteByIdRequestParam,
  ): Promise<DtoCourseDeleteByIdResponseBody> {
    const result = await this.courseRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Course with this ID not found.');
    }
    return {
      succuss: true,
      message: '',
      status: 201,
    };
  }
}
