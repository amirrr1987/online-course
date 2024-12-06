import {
  IsDate,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CourseBaseDto {
  @IsInt()
  @IsPositive()
  id: number;

  @IsString()
  label: string;

  @IsString()
  value: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  category_id?: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
