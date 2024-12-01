import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
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
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async create(
    dto: DtoRoleCreateOneRequestBody,
  ): Promise<DtoRoleCreateOneResponseBody> {
    const existingRole = await this.roleRepository.findOneBy({
      value: dto.value,
    });
    if (existingRole) {
      throw new ConflictException(
        'Role with the provided value already exists.',
      );
    }
    const role = this.roleRepository.create(dto);
    await this.roleRepository.save(role);
    return {
      succuss: true,
      message: '',
      status: 201,
    };
  }

  async findAll(): Promise<DtoRoleFindAllResponseBody> {
    const roles = await this.roleRepository.find();
    return {
      succuss: true,
      status: 200,
      message: 'Roles retrieved successfully',
      data: roles,
    };
  }

  async findById(
    id: DtoRoleFindByIdRequestParam,
  ): Promise<DtoRoleFindByIdResponseBody> {
    const role = await this.roleRepository.findOneBy({ id });
    if (!role) {
      throw new NotFoundException('Role not found.');
    }
    return {
      succuss: true,
      message: '',
      status: 201,
      data: role,
    };
  }

  async updateById(
    id: DtoRoleUpdateByIdRequestParam,
    dto: DtoRoleUpdateByIdRequestBody,
  ): Promise<DtoRoleUpdateByIdResponseBody> {
    const role = await this.roleRepository.findOneBy({ id });
    if (!role) {
      throw new NotFoundException('Role not found.');
    }
    if (dto.value) {
      const duplicateRole = await this.roleRepository.findOneBy({
        value: dto.value,
      });
      if (duplicateRole && duplicateRole.id !== id) {
        throw new ConflictException(
          'Role with the provided value already exists.',
        );
      }
    }
    const updatedData = {
      ...dto,
      updated_at: new Date(),
    };

    await this.roleRepository.update(id, updatedData);
    return {
      succuss: true,
      message: '',
      status: 201,
    };
  }

  async deleteById(
    id: DtoRoleRemoveByIdRequestParam,
  ): Promise<DtoRoleRemoveByIdResponseBody> {
    const result = await this.roleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Role with this ID not found.');
    }
    return {
      succuss: true,
      message: '',
      status: 201,
    };
  }
}
