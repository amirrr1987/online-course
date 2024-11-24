import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

class CreateCategoryDto {
  @IsNumber()
  id: number;

  @IsString()
  label: string;

  @IsString()
  value: string;
}

class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace CategoryDTO {
  export namespace GetAll {
    export type Response = UpdateCategoryDto[];
  }
  export namespace CreateOne {
    export class Request extends CreateCategoryDto {}
    export type Response = CreateCategoryDto;
  }
  export namespace FindOne {
    export type Request = UpdateCategoryDto['id'];
    export type Response = UpdateCategoryDto;
  }
  export namespace UpdateOne {
    export class Request extends UpdateCategoryDto {}
    export type Response = UpdateCategoryDto;
  }
  export namespace DeleteOne {
    export type Request = UpdateCategoryDto['id'];
    export type Response = UpdateCategoryDto;
  }
}
