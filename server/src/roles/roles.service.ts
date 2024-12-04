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
  RoleCreateRequestDto,
  RoleCreateResponseDto,
  RoleFindAllResponseDto,
  RoleFindByIdRequestIdParamDto,
  RoleFindByIdResponseDto,
  RoleDeleteByIdRequestIdParamDto,
  RoleDeleteByIdResponseDto,
  RoleUpdateByIdRequestDto,
  RoleUpdateByIdResponseDto,
  RoleUpdateByIdRequestIdParamDto,
} from './dto';

@Injectable()
export class RolesService implements IRolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
  ) {}

  async create(dto: RoleCreateRequestDto): Promise<RoleCreateResponseDto> {
    const existingRole = await this.roleRepository.findOneBy({
      value: dto.value,
    });
    if (existingRole) {
      throw new ConflictException(
        'Role with the provided value already exists.',
      );
    }
    const updatedData = {
      ...dto,
      updated_at: new Date(),
    };
    const role = this.roleRepository.create(updatedData);
    await this.roleRepository.save(role);
    return {
      success: true,
      message: '',
      status: 201,
    };
  }

  async findAll(): Promise<RoleFindAllResponseDto> {
    const roles = await this.roleRepository.find();
    return {
      success: true,
      status: 200,
      message: 'Roles retrieved successfully',
      data: roles,
    };
  }

  async findById(
    id: RoleFindByIdRequestIdParamDto,
  ): Promise<RoleFindByIdResponseDto> {
    const role = await this.roleRepository.findOneBy({ id });
    if (!role) {
      throw new NotFoundException('Role not found.');
    }
    return {
      success: true,
      message: '',
      status: 201,
      data: role,
    };
  }

  async updateById(
    id: RoleUpdateByIdRequestIdParamDto,
    dto: RoleUpdateByIdRequestDto,
  ): Promise<RoleUpdateByIdResponseDto> {
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
      success: true,
      message: '',
      status: 201,
    };
  }

  async deleteById(
    id: RoleDeleteByIdRequestIdParamDto,
  ): Promise<RoleDeleteByIdResponseDto> {
    const result = await this.roleRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Role with this ID not found.');
    }
    return {
      success: true,
      message: '',
      status: 201,
    };
  }
}
