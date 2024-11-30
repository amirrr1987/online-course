import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role as RoleEntity } from './role.entity';
import {
  RoleCreateOneRequest,
  RoleDeleteOneRequest,
  RoleFindOneRequest,
  RoleUpdateOneRequest,
} from './dto';
import { ResponseService } from 'src/response/response.service';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
    private readonly responseService: ResponseService,
  ) {}

  /**
   * Fetch all roles from the database.
   * @returns A promise that resolves with an array of roles.
   */
  async findAll() {
    return await this.roleRepository.find();
    // return this.responseService.findAll('roles', roles);
  }

  /**
   * Fetch a role by its ID.
   * @param id - The unique ID of the role.
   * @returns A promise that resolves with the role or throws a NotFoundException.
   */
  async findOne(id: RoleFindOneRequest) {
    const role = await this.roleRepository.findOne({ where: { id } });
    if (!role.id) {
      throw new NotFoundException(`role with ID ${id} not found`);
    }
    // return this.responseService.findOne('Role', role);
    return role;
  }

  /**
   * Create a new role in the database.
   * @param RoleDTO - Data Transfer Object containing role data.
   * @returns A promise that resolves with the created role.
   */
  async create(dto: RoleCreateOneRequest) {
    console.log('🚀 ~ RolesService ~ create ~ dto:', dto);
    const existingRole = await this.roleRepository.findOne({
      where: { value: dto.value },
    });
    if (existingRole.id) {
      throw new ConflictException(
        `A role with value ${dto.value} already exists.`,
      );
    }
    const roleToCreate = await this.roleRepository.create(dto);
    console.log('🚀 ~ RolesService ~ create ~ roleToCreate:', roleToCreate);

    // const data = await this.roleRepository.save(dto);
    // return data;
  }

  async update(id, dto: RoleUpdateOneRequest) {
    const role = await this.roleRepository.findOne({ where: { id: id } });

    if (!role.id) {
      throw new NotFoundException(`role with ID ${role.id} not found.`);
    }

    await this.roleRepository.update(role.id, dto);

    return role;
  }

  /**
   * Delete a role from the database.
   * @param id - The ID of the role to delete.
   * @returns A promise that resolves with a boolean indicating success.
   */
  async remove(id: RoleDeleteOneRequest) {
    const role = await this.roleRepository.findOne({ where: { id } });

    if (!role.id) {
      throw new NotFoundException(`role with ID ${id} not found.`);
    }
    await this.roleRepository.delete(id);
    return this.responseService.remove('role', role.id);
  }
}
