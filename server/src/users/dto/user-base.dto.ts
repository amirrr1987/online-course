import { IsArray, IsDate, IsNumber, IsString } from 'class-validator';
import { DtoCourseBase } from 'src/courses/dto/course-base.dto';

export class DtoUserBase {
  @IsNumber()
  id: number;

  @IsString()
  label: string;

  @IsString()
  mobile: string;

  @IsNumber()
  age: number;

  @IsArray()
  courses: DtoCourseBase[];

  @IsNumber()
  role_id: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
