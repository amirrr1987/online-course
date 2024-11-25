import { PartialType } from '@nestjs/mapped-types';
import {
  IsDate,
  IsMobilePhone,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty()
  first_name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty()
  last_name: string;

  @IsString()
  @IsMobilePhone('fa-IR')
  @ApiProperty()
  mobile: string;
}

export class UpdateUserDto extends CreateUserDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({ default: 1 })
  id: number;

  @IsDate()
  @ApiProperty()
  createdAt: Date;

  @IsDate()
  @ApiProperty()
  updatedAt: Date;
}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace UserDTO {
  export namespace GetAll {
    export class Response extends UpdateUserDto {}
  }
  export namespace CreateOne {
    export class Request extends CreateUserDto {}
    export class Response extends UpdateUserDto {}
  }
  export namespace FindOne {
    export type Request = UpdateUserDto['id'];
    export class Response extends UpdateUserDto {}
  }
  export namespace UpdateOne {
    export class Request extends UpdateUserDto {}
    export class Response extends UpdateUserDto {}
  }
  export namespace DeleteOne {
    export type Request = UpdateUserDto['id'];
    export class Response extends UpdateUserDto {}
  }
}
