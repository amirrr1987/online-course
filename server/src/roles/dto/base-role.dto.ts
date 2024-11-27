import { IsNumber, IsString } from 'class-validator';

export class BaseRoleDto {
  @IsNumber()
  id: number;

  @IsString()
  label: string;

  @IsString()
  value: string;
}
