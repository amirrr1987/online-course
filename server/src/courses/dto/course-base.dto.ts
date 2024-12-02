import { IsDate, IsNumber, IsString } from 'class-validator';

export class DtoUserBase {
  @IsNumber()
  id: number;

  @IsString()
  label: string;

  @IsString()
  mobile: string;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
