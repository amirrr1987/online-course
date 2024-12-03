import {
  IsArray,
  IsDate,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
import { CourseBaseDto } from 'src/courses/dto/course-base.dto';

export class UserBaseDto {
  @IsNumber()
  id: number;

  @IsString()
  @MinLength(2)
  label: string;

  @IsString()
  mobile: string;

  @IsNumber()
  age: number;

  @IsArray()
  courses: CourseBaseDto[];

  @IsNumber()
  role_id: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
