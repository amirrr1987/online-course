import { ApiProperty } from '@nestjs/swagger';
import { RoleBaseDto } from './role-base.dto';
import { HttpStatus } from '@nestjs/common';

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
    type: [RoleBaseDto],
  })
  data: RoleBaseDto[];
}
