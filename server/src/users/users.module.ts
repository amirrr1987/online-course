import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User as UserEntity } from './entities/user.entity';
import { Role as RoleEntity } from 'src/roles/entities/role.entity';
import { Course as CourseEntity } from 'src/courses/entities/course.entity';
import { ResponseService } from 'src/response/response.service';
import { RolesService } from 'src/roles/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity, CourseEntity])],
  controllers: [UsersController],
  providers: [UsersService, ResponseService, RolesService],
})
export class UsersModule {}
