import { PartialType } from '@nestjs/swagger';
import { CategoryBaseDto } from './category-base.dto';
import { ResponseData } from 'src/response/response.service.interface';
export type CategoryUpdateByIdRequestIdParamDto = CategoryBaseDto['id'];
export class CategoryUpdateByIdRequestDto extends PartialType(
  CategoryBaseDto,
) {}
export class CategoryUpdateByIdResponseDto extends ResponseData {}
