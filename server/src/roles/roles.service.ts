import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role as RoleEntity } from './role.entity';
import { RoleDTO } from './role.dto';
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
    const roles = await this.roleRepository.find();
    return this.responseService.findAll('roles', roles);
  }

  /**
   * Fetch a role by its ID.
   * @param id - The unique ID of the role.
   * @returns A promise that resolves with the role or throws a NotFoundException.
   */
  async findOne(id: RoleDTO.FindOne.Request) {
    const role = await this.roleRepository.findOne({ where: { id } });
    if (!role.id) {
      throw new NotFoundException(`role with ID ${id} not found`);
    }
    return this.responseService.findOne('Role', role);
  }

  /**
   * Create a new role in the database.
   * @param RoleDTO - Data Transfer Object containing role data.
   * @returns A promise that resolves with the created role.
   */
  async create(dto: RoleDTO.CreateOne.Request) {
    const existingRole = await this.roleRepository.findOne({
      where: { value: dto.value },
    });
    if (existingRole.id) {
      throw new ConflictException(
        `A role with value ${dto.value} already exists.`,
      );
    }
    const roleToCreate = await this.roleRepository.create(dto);
    await this.roleRepository.save(roleToCreate);

    return this.responseService.createOne('role', roleToCreate.id);
  }

  async update(
    id: RoleDTO.UpdateOne.Request['id'],
    dto: RoleDTO.UpdateOne.Request,
  ) {
    const role = await this.roleRepository.findOne({ where: { id } });

    if (!role.id) {
      throw new NotFoundException(`role with ID ${id} not found.`);
    }

    await this.roleRepository.update(id, dto);

    return this.responseService.updateOne('role', role.id);
  }

  /**
   * Delete a role from the database.
   * @param id - The ID of the role to delete.
   * @returns A promise that resolves with a boolean indicating success.
   */
  async remove(id: RoleDTO.DeleteOne.Request) {
    const role = await this.roleRepository.findOne({ where: { id } });

    if (!role.id) {
      throw new NotFoundException(`role with ID ${id} not found.`);
    }
    await this.roleRepository.delete(id);
    return this.responseService.remove('role', role.id);
  }
}
