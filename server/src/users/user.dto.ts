import { PartialType } from '@nestjs/mapped-types';
import {
  IsMobilePhone,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  first_name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  last_name: string;

  @IsString()
  @IsMobilePhone('fa-IR')
  mobile: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace UserDTO {
  export namespace GetAll {
    export type Response = UpdateUserDto[];
  }
  export namespace CreateOne {
    export class Request extends CreateUserDto {}
    export type Response = CreateUserDto;
  }
  export namespace FindOne {
    export type Request = UpdateUserDto['id'];
    export type Response = UpdateUserDto;
  }
  export namespace UpdateOne {
    export class Request extends UpdateUserDto {}
    export type Response = UpdateUserDto;
  }
  export namespace DeleteOne {
    export type Request = UpdateUserDto['id'];
    export type Response = UpdateUserDto;
  }
}
