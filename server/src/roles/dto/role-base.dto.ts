import { IsNumber, IsString } from 'class-validator';

export class RoleBaseDto {
  @IsNumber()
  id: number;

  @IsString()
  label: string;

  @IsString()
  value: string;
}
