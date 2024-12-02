import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/config.service';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResponseService } from './response/response.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(config.getTypeOrmConfig()),
    RolesModule,
    UsersModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ResponseService],
})
export class AppModule {}
