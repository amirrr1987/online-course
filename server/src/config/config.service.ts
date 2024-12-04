import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { Category as CategoryEntity } from '../categories/entities/category.entity';
import { Course as CourseEntity } from '../courses/entities/course.entity';
import { Role as RoleEntity } from '../roles/entities/role.entity';
import { User as UserEntity } from '../users/entities/user.entity';

dotenv.config();
@Injectable()
export class ConfigService {
  constructor() {}

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [RoleEntity, UserEntity, CategoryEntity, CourseEntity],
      synchronize: true,
      logging: true,
    };
  }
}
export const config = new ConfigService();
