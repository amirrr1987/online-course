import { ICoursesService } from './interfaces/courses.service.interface';
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
import { Course as CourseEntity } from './entities/course.entity';
import { ResponseService } from '../response/response.service';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CoursesService implements ICoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
    private readonly responseService: ResponseService,
  ) {}
  async create(dto: CourseCreateRequestDto): Promise<CourseCreateResponseDto> {
    const existingCourse = await this.courseRepository.findOneBy({
      value: dto.value,
    });
    if (existingCourse) {
      throw new ConflictException(
        'Course with the provided value already exists.',
      );
    }
    const updatedData: DeepPartial<CourseEntity> = {
      ...dto,
      // categories: { id: dto.category_id },
      updated_at: new Date(),
    };
    const course = this.courseRepository.create(updatedData);
    await this.courseRepository.save(course);
    return this.responseService.createOne('user', course.id);
  }
  async findAll(): Promise<CourseFindAllResponseDto> {
    const courses = await this.courseRepository.find();
    return {
      success: true,
      status: 200,
      message: 'Courses retrieved successfully',
      data: courses,
    };
  }
  async findById(
    id: CourseFindByIdRequestIdParamDto,
  ): Promise<CourseFindByIdResponseDto> {
    const course = await this.courseRepository.findOneBy({ id });
    if (!course) {
      throw new NotFoundException('Course not found.');
    }
    return {
      success: true,
      message: '',
      status: 201,
      data: course,
    };
  }
  async updateById(
    dto: CourseUpdateByIdRequestDto,
  ): Promise<CourseUpdateByIdResponseDto> {
    const course = await this.courseRepository.findOneBy({ id: dto.id });
    if (!course.id) {
      throw new NotFoundException('Course not found.');
    }
    if (dto.value) {
      const duplicateCourse = await this.courseRepository.findOneBy({
        value: dto.value,
      });
      if (duplicateCourse && duplicateCourse.id !== dto.id) {
        throw new ConflictException(
          'Course with the provided value already exists.',
        );
      }
    }
    const updatedData = {
      ...dto,
      updated_at: new Date(),
    };

    await this.courseRepository.update(dto.id, updatedData);
    return {
      success: true,
      message: '',
      status: 201,
    };
  }
  async deleteById(
    id: CourseDeleteByIdRequestIdParamDto,
  ): Promise<CourseDeleteByIdResponseDto> {
    const result = await this.courseRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Course with this ID not found.');
    }
    return {
      success: true,
      message: '',
      status: 201,
    };
  }
}
