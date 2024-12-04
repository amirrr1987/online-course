import {
  IsArray,
  IsDate,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CourseBaseDto } from 'src/courses/dto/course-base.dto';

export class UserBaseDto {
  @IsNumber()
  id: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  mobile: string;

  @IsNumber()
  age: number;

  @IsArray()
  @IsOptional()
  courses: CourseBaseDto[];

  @IsNumber()
  role_id: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
