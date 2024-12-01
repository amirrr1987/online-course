import { PartialType } from '@nestjs/swagger';
import { DtoUserBase } from './user-base.dto';

export class DtoUserUpdateByIdRequestBody extends PartialType(DtoUserBase) {}
