import { IsDate, IsNumber, IsString } from 'class-validator';

export class CategoryBaseDto {
  @IsNumber()
  id: number;

  @IsString()
  label: string;

  @IsString()
  value: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
