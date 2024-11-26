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
import { PartialType, PickType } from '@nestjs/mapped-types';

class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({
    example: 'John',
    description: 'First name of the user',
    required: true,
  })
  first_name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the user',
    required: true,
  })
  last_name: string;

  @IsString()
  @IsMobilePhone('fa-IR')
  @ApiProperty({
    type: String,
    description: 'Mobile phone',
    required: true,
  })
  mobile: string;
}

export class UpdateUserDto extends CreateUserDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    description: 'id',
    required: true,
  })
  id: number;

  @IsDate()
  @ApiProperty({
    type: Date,
    description: 'createdAt',
    required: false,
  })
  createdAt?: Date;

  @IsDate()
  @ApiProperty({
    type: Date,
    description: 'updatedAt',
    required: false,
  })
  updatedAt?: Date;
}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace UserDTO {
  export namespace GetAll {
    export class ResponseType extends UpdateUserDto {}
  }
  export namespace CreateOne {
    export class RequestType extends CreateUserDto {}
    export class ResponseType extends UpdateUserDto {}
  }
  export namespace FindOne {
    export type RequestType = UpdateUserDto['id'];
    export class ResponseType extends UpdateUserDto {}
  }
  export namespace UpdateOne {
    export class RequestType extends UpdateUserDto {}
    export class ResponseType extends UpdateUserDto {}
  }
  export namespace DeleteOne {
    export type RequestType = UpdateUserDto['id'];
    export class ResponseType extends UpdateUserDto {}
  }
}
