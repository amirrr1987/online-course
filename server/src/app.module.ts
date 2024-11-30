import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/config.service';
import { RolesModule } from './roles/roles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StandardResponseModule } from 'nest-standard-response';
@Module({
  imports: [
    TypeOrmModule.forRoot(config.getTypeOrmConfig()),
    StandardResponseModule.forRoot(),
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
