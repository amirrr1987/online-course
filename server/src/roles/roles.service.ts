import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Role as RoleEntity } from './entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IRolesService } from './interfaces/roles.service.interface';
import {
  DtoRoleCreateOneRequestBody,
  DtoRoleCreateOneResponseBody,
  DtoRoleFindAllResponseBody,
  DtoRoleFindByIdRequestParam,
  DtoRoleFindByIdResponseBody,
  DtoRoleRemoveByIdRequestParam,
  DtoRoleRemoveByIdResponseBody,
  DtoRoleUpdateByIdRequestBody,
  DtoRoleUpdateByIdRequestParam,
  DtoRoleUpdateByIdResponseBody,
} from './dto';
@Injectable()
export class RolesService implements IRolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly userRepository: Repository<RoleEntity>,
  ) {}
  async create(
    dto: DtoRoleCreateOneRequestBody,
  ): Promise<DtoRoleCreateOneResponseBody> {
    const duplicateRole = await this.userRepository.findOneBy({
      value: dto.value,
    });
    if (duplicateRole) {
      throw new HttpException(
        'Role with the provided value already exists.',
        HttpStatus.CONFLICT,
      );
    }
    const role = this.userRepository.create(dto);
    await role.save();
    return role;
  }
  async findAll(): Promise<DtoRoleFindAllResponseBody> {
    return await this.userRepository.find();
  }
  async findById(
    id: DtoRoleFindByIdRequestParam,
  ): Promise<DtoRoleFindByIdResponseBody> {
    return await this.userRepository.findOneBy({ id: id });
  }
  async updateById(
    id: DtoRoleUpdateByIdRequestParam,
    dto: DtoRoleUpdateByIdRequestBody,
  ): Promise<DtoRoleUpdateByIdResponseBody> {
    return await this.userRepository.update(id, dto);
  }
  async deleteById(
    id: DtoRoleRemoveByIdRequestParam,
  ): Promise<DtoRoleRemoveByIdResponseBody> {
    return await this.userRepository.delete(id);
  }
}
