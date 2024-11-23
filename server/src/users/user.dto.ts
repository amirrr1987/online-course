import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  mobile: string;
}

class UpdateUserDto extends PartialType(CreateUserDto) {}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace UserDTO {
  export namespace GetAll {
    export type Response = UpdateUserDto[];
  }
  export namespace CreateOne {
    export type Request = CreateUserDto;
    export type Response = CreateUserDto;
  }
  export namespace FindOne {
    export type Request = UpdateUserDto['id'];
    export type Response = UpdateUserDto;
  }
  export namespace UpdateOne {
    export type Request = UpdateUserDto;
    export type Response = UpdateUserDto;
  }
  export namespace DeleteOne {
    export type Request = UpdateUserDto['id'];
    export type Response = UpdateUserDto;
  }
}
