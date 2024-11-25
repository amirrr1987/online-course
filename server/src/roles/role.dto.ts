import { PartialType } from '@nestjs/mapped-types';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

class CreateRoleDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  label: string;

  @IsString()
  @IsOptional()
  value: string;
}

class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsNumber()
  id: number;
}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace RoleDTO {
  export namespace GetAll {
    export type Response = UpdateRoleDto[];
  }
  export namespace CreateOne {
    export class Request extends CreateRoleDto {}
    export type Response = CreateRoleDto;
  }
  export namespace FindOne {
    export type Request = UpdateRoleDto['id'];
    export type Response = UpdateRoleDto;
  }
  export namespace UpdateOne {
    export class Request extends UpdateRoleDto {}
    export type Response = UpdateRoleDto;
  }
  export namespace DeleteOne {
    export type Request = UpdateRoleDto['id'];
    export type Response = UpdateRoleDto;
  }
}
