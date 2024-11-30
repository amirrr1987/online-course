import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';

class CoreDto {}

export class UpdateCoreDto extends PartialType(CoreDto) {
  @IsNumber()
  id: number;
}

/* eslint-disable @typescript-eslint/no-namespace */
export namespace CoreDTO {
  export class Create extends CoreDto {}
  export class Update extends UpdateCoreDto {}
}
