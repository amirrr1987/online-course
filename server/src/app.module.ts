import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseService } from './response/response.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ResponseService],
})
export class AppModule {}
