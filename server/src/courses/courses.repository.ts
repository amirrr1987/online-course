import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { Course as CourseEntity } from './entities/course.entity';

@Injectable()
export class CoursesRepository extends Repository<CourseEntity> {}
