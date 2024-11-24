import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

class CreateCourseDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  label: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  value: string;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsNumber()
  id: number;
}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace CourseDTO {
  export namespace GetAll {
    export type Response = UpdateCourseDto[];
  }
  export namespace CreateOne {
    export class Request extends CreateCourseDto {}
    export type Response = CreateCourseDto;
  }
  export namespace FindOne {
    export type Request = UpdateCourseDto['id'];
    export type Response = UpdateCourseDto;
  }
  export namespace UpdateOne {
    export class Request extends UpdateCourseDto {}
    export type Response = UpdateCourseDto;
  }
  export namespace DeleteOne {
    export type Request = UpdateCourseDto['id'];
    export type Response = UpdateCourseDto;
  }
}
