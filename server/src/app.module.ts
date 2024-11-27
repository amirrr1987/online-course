import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseService } from './response/response.service';
// import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
// import { CategoriesModule } from './categories/categories.module';
// import { CoursesModule } from './courses/courses.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
// import { RolesModule } from './roles/roles.module';
// import { SssModule } from './sss/sss.module';
// import { AdelModule } from './adel/adel.module';
// import { AdeaModule } from './adea/adea.module';
// import { StandardResponseModule } from 'nest-standard-response';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    // StandardResponseModule.forRoot(),
    // UsersModule,
    // CategoriesModule,
    // CoursesModule,
    RolesModule,
    // SssModule,
    // AdelModule,
    // AdeaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ResponseService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
