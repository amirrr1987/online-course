import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';
import { RoleBaseDto } from './role-base.dto';

export type RoleFindOneRequest = RoleBaseDto['id'];

export class RoleFindOneResponse {
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
    type: RoleBaseDto,
  })
  data: RoleBaseDto;
}
