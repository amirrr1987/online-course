import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { RoleCreateOneRequest } from './create-role.dto';
import { HttpStatus } from '@nestjs/common';

export class RoleGetAllRequest extends PartialType(RoleCreateOneRequest) {
  @IsNumber()
  @ApiProperty({
    type: Number,
    required: false,
  })
  id: number;
}

export class RoleGetAllResponse {
  @ApiProperty({
    type: Number,
    example: HttpStatus.CREATED,
  })
  statusCode: number;

  @ApiProperty({
    type: String,
    example: 'The key with ID was created successfully.',
  })
  message: string;

  @ApiProperty({
    example: HttpStatus.CREATED,
    type: [RoleCreateOneRequest],
  })
  data: RoleCreateOneRequest[];
}
