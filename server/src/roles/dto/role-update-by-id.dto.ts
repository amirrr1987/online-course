import { IntersectionType, OmitType, PartialType } from '@nestjs/mapped-types';
import { DtoRoleBase } from './role-base.dto';

export type DtoRoleUpdateByIdRequestParam = DtoRoleBase['id'];
export class DtoRoleUpdateByIdRequestBody extends IntersectionType(
  PartialType(OmitType(DtoRoleBase, ['id', 'created_at', 'updated_at'])),
) {}
export class DtoRoleUpdateByIdResponseBody {
  succuss: boolean;
  status: number;
  message: string;
}
