import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User as UserEntity } from './entities/user.entity';
import { Role as RoleEntity } from '../roles/entities/role.entity';
import { ResponseService } from '../response/response.service';
import { RolesService } from 'src/roles/roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity])],
  controllers: [UsersController],
  providers: [UsersService, RolesService, ResponseService],
})
export class UsersModule {}
