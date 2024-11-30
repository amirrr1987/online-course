import {
  IntersectionType,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';
import { RoleBaseDto } from './role-base.dto';

export class RoleUpdateOneRequest extends IntersectionType(
  PartialType(OmitType(RoleBaseDto, ['id'])),
) {}

export class RoleUpdateOneResponse {
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
}
