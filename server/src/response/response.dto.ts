import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

/* eslint-disable @typescript-eslint/no-namespace */
export namespace ResponseDTO {
  export class GetAll {
    @ApiProperty({
      type: Number,
      example: HttpStatus.OK,
    })
    statusCode: number;

    @ApiProperty({
      type: String,
      example: 'All keys are returned successfully.',
    })
    message: string;

    data: any;
  }

  export class CreateOne {
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

  export class UpdateOne {
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

  export class FindOne {
    @ApiProperty({
      type: Number,
      example: HttpStatus.OK,
    })
    statusCode: number;

    @ApiProperty({
      type: String,
      example: 'The key with ID was found successfully.',
    })
    message: string;
  }

  export class DeleteOne {
    @ApiProperty({
      type: Number,
      example: HttpStatus.ACCEPTED,
    })
    statusCode: number;

    @ApiProperty({
      type: String,
      example: 'The key with ID was removed successfully.',
    })
    message: string;
  }
}
