import { HttpStatus } from '@nestjs/common';
import { ApiProperty, OmitType } from '@nestjs/swagger';
import { BaseRoleDto } from './base-role.dto';

export class RoleCreateOneRequest extends OmitType(BaseRoleDto, ['id']) {}

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
