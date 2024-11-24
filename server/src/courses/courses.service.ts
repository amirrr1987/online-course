import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course as CourseEntity } from './course.entity';
import { CourseDTO } from './course.dto';
import { ResponseService } from 'src/response/response.service';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly courseRepository: Repository<CourseEntity>,
    private readonly responseService: ResponseService,
  ) {}

  /**
   * Fetch all courses from the database.
   * @returns A promise that resolves with an array of courses.
   */
  async findAll() {
    const courses = await this.courseRepository.find();
    return this.responseService.findAll('courses', courses);
  }

  /**
   * Fetch a course by its ID.
   * @param id - The unique ID of the course.
   * @returns A promise that resolves with the course or throws a NotFoundException.
   */
  async findOne(id: CourseDTO.FindOne.Request) {
    const course = await this.courseRepository.findOne({ where: { id } });
    if (!course.id) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return this.responseService.findOne('course', course);
  }

  /**
   * Create a new course in the database.
   * @param courseDTO - Data Transfer Object containing course data.
   * @returns A promise that resolves with the created course.
   */
  async create(dto: CourseDTO.CreateOne.Request) {
    const existingCourse = await this.courseRepository.findOne({
      where: { value: dto.value },
    });
    if (existingCourse.id) {
      throw new ConflictException(
        `A course with value ${dto.value} already exists.`,
      );
    }
    const courseToCreate = await this.courseRepository.create(dto);
    await this.courseRepository.save(courseToCreate);

    return this.responseService.createOne('course', courseToCreate.id);
  }

  async update(
    id: CourseDTO.UpdateOne.Request['id'],
    updatedCourse: CourseDTO.UpdateOne.Request,
  ) {
    const course = await this.courseRepository.findOne({ where: { id } });

    if (!course.id) {
      throw new NotFoundException(`Course with ID ${id} not found.`);
    }

    await this.courseRepository.update(id, updatedCourse);

    return this.responseService.updateOne('course', course.id);
  }

  /**
   * Delete a course from the database.
   * @param id - The ID of the course to delete.
   * @returns A promise that resolves with a boolean indicating success.
   */
  async remove(id: CourseDTO.DeleteOne.Request) {
    const course = await this.courseRepository.findOne({ where: { id } });

    if (!course.id) {
      throw new NotFoundException(`Course with ID ${id} not found.`);
    }
    await this.courseRepository.delete(id);
    return this.responseService.remove('course', course.id);
  }
}
