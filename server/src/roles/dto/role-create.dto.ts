import { HttpStatus } from '@nestjs/common';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { RoleBaseDto } from './role-base.dto';

export class RoleCreateOneRequest extends OmitType(RoleBaseDto, ['id']) {}

export class RoleCreateOneResponse {
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
