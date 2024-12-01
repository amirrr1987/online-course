import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {
  DtoUserUpdateByIdRequestBody,
  DtoUserUpdateByIdRequestParam,
  DtoUserUpdateByIdResponseBody,
  UpdateUserDto,
} from './dto/user-update-by-id.dto';
import { User as UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IUsersService } from './interfaces/users.service.interface';
import {
  DtoUserCreateOneRequestBody,
  DtoUserCreateOneResponseBody,
  DtoUserFindAllResponseBody,
  DtoUserFindByIdRequestParam,
  DtoUserFindByIdResponseBody,
  DtoUserDeleteByIdRequestParam,
  DtoUserDeleteByIdResponseBody,
} from './dto';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async create(
    dto: DtoUserCreateOneRequestBody,
  ): Promise<DtoUserCreateOneResponseBody> {
    const existingUser = await this.userRepository.findOneBy({
      value: dto.value,
    });
    if (existingUser) {
      throw new ConflictException(
        'Role with the provided value already exists.',
      );
    }
    const user = this.userRepository.create(dto);
    await this.userRepository.save(user);
    return {
      succuss: true,
      message: '',
      status: 201,
    };
  }
  async findAll(): Promise<DtoUserFindAllResponseBody> {
    const users = await this.userRepository.find();
    return {
      succuss: true,
      status: 200,
      message: 'Roles retrieved successfully',
      data: users,
    };
  }
  async findById(
    id: DtoUserFindByIdRequestParam,
  ): Promise<DtoUserFindByIdResponseBody> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Role not found.');
    }
    return {
      succuss: true,
      message: '',
      status: 201,
      data: user,
    };
  }
  async updateById(
    id: DtoUserUpdateByIdRequestParam,
    dto: DtoUserUpdateByIdRequestBody,
  ): Promise<DtoUserUpdateByIdResponseBody> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('Role not found.');
    }
    if (dto.value) {
      const duplicateRole = await this.userRepository.findOneBy({
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

    await this.userRepository.update(id, updatedData);
    return {
      succuss: true,
      message: '',
      status: 201,
    };
  }
  async deleteById(
    id: DtoUserDeleteByIdRequestParam,
  ): Promise<DtoUserDeleteByIdResponseBody> {
    const result = await this.userRepository.delete(id);
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
