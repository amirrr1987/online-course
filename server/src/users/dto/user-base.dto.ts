import {
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { CourseBaseDto } from '../../courses/dto/course-base.dto';

export class UserBaseDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  mobile: string;

  @IsInt()
  @IsPositive()
  age: number;

  @IsArray()
  @IsOptional()
  courses: CourseBaseDto[];

  @IsInt()
  @IsPositive()
  role_id: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
