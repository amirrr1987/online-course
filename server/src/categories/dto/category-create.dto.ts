import { OmitType } from '@nestjs/mapped-types';
import { CategoryBaseDto } from './category-base.dto';
import { ResponseData } from '../../response/response.service.interface';
export class CategoryCreateRequestDto extends OmitType(CategoryBaseDto, [
  'id',
  'created_at',
  'updated_at',
]) {}
export class CategoryCreateResponseDto extends ResponseData {}
