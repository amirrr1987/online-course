import { IsDate, IsInt, IsNumber, IsPositive, IsString } from 'class-validator';

export class RoleBaseDto {
  @IsInt()
  @IsPositive()
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
