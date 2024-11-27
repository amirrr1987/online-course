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
import { ResponseDTO } from 'src/response/response.dto';
import { HttpStatus } from '@nestjs/common';

class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({
    type: String,
    required: true,
  })
  first_name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @ApiProperty({
    type: String,
    required: true,
  })
  last_name: string;

  @IsString()
  @IsMobilePhone('fa-IR')
  @ApiProperty({
    type: String,
    required: true,
  })
  mobile: string;
}

export class UpdateUserDto extends CreateUserDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    required: true,
  })
  id: number;

  @IsDate()
  @ApiProperty({
    type: Date,
    required: false,
  })
  createdAt?: Date;

  @IsDate()
  @ApiProperty({
    type: Date,
    required: false,
  })
  updatedAt?: Date;
}

export class UserDTOClass {}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace UserDTO {
  export namespace GetAll {
    export class GResponse extends ResponseDTO.GetAll {
      data: UpdateUserDto[];
    }
  }
  export namespace CreateOne {
    export class CRequest extends CreateUserDto {}
    export class CResponse extends ResponseDTO.CreateOne {}
  }
  export namespace FindOne {
    export type FRequest = UpdateUserDto['id'];
    export class FResponse extends ResponseDTO.FindOne {
      data: UpdateUserDto;
    }
  }
  export namespace UpdateOne {
    export class URequest extends UpdateUserDto {}
    export class UResponse implements ResponseDTO.UpdateOne {
      @ApiProperty({
        type: Number,
        example: HttpStatus.ACCEPTED,
      })
      statusCode: number;

      @ApiProperty({
        type: String,
        example: 'The key with ID was updated successfully.',
      })
      message: string;
    }
  }
  export namespace DeleteOne {
    export type DRequest = UpdateUserDto['id'];
    export class DResponse extends ResponseDTO.DeleteOne {}
  }
}
