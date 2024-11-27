import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ResponseDTO } from 'src/response/response.dto';

class CreateRoleDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({
    type: String,
    required: true,
  })
  label: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: String,
    required: true,
  })
  value: string;
}

class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: false,
  })
  id: number;
}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace RoleDTO {
  export namespace GetAll {
    export class GResponse extends ResponseDTO.GetAll {
      data: UpdateRoleDto[];
    }
  }
  export namespace CreateOne {
    export class CRequest extends CreateRoleDto {}
    export class CResponse extends ResponseDTO.CreateOne {}
  }
  export namespace FindOne {
    export type FRequest = UpdateRoleDto['id'];
    export class FResponse extends ResponseDTO.FindOne {
      data: UpdateRoleDto;
    }
  }
  export namespace UpdateOne {
    export class URequest extends UpdateRoleDto {}
    export type UResponse = ResponseDTO.UpdateOne;
  }
  export namespace DeleteOne {
    export type DRequest = UpdateRoleDto['id'];
    export type DResponse = ResponseDTO.DeleteOne;
  }
}
