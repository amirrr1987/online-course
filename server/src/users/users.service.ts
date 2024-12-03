import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { IUsersService } from './interfaces/users.service.interface';
import {
  UserCreateRequestDto,
  UserCreateResponseDto,
  UserFindAllResponseDto,
  UserFindByIdRequestIdParamDto,
  UserFindByIdResponseDto,
  UserUpdateByIdRequestIdParamDto,
  UserUpdateByIdRequestDto,
  UserUpdateByIdResponseDto,
  UserDeleteByIdRequestIdParamDto,
  UserDeleteByIdResponseDto,
} from './dto';
import { ResponseService } from 'src/response/response.service';
import { RolesService } from 'src/roles/roles.service';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService implements IUsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleService: RolesService,
    private readonly responseService: ResponseService,
  ) {}
  async create(dto: UserCreateRequestDto): Promise<UserCreateResponseDto> {
    const existingUser = await this.userRepository.findOneBy({
      mobile: dto.mobile,
    });
    if (existingUser) {
      throw new ConflictException(
        'User with the provided value already exists.',
      );
    }
    const user = this.userRepository.create(dto);
    await this.userRepository.save(user);
    return this.responseService.createOne('user', user.id);
  }
  async findAll(): Promise<UserFindAllResponseDto> {
    const users = await this.userRepository.find();
    return this.responseService.findAll('users', users);
  }
  async findById(
    id: UserFindByIdRequestIdParamDto,
  ): Promise<UserFindByIdResponseDto> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    return this.responseService.findOne('user', id, user);
  }
  async updateById(
    id: UserUpdateByIdRequestIdParamDto,
    dto: UserUpdateByIdRequestDto,
  ): Promise<UserUpdateByIdResponseDto> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found.');
    }
    if (dto.mobile) {
      const duplicateUser = await this.userRepository.findOneBy({
        mobile: dto.mobile,
      });
      if (duplicateUser && duplicateUser.id !== id) {
        throw new ConflictException(
          'User with the provided value already exists.',
        );
      }
    }

    const updatedData = {
      ...dto,
      updated_at: new Date(),
    };

    if (dto.role_id) {
      const { data } = await this.roleService.findById(dto.role_id);
      if (!data.id) {
        throw new NotFoundException(`Role is not found`);
      }
    }
    await this.userRepository.update(id, updatedData);
    const res = await this.userRepository.findOneBy({ id });
    return this.responseService.updateOne('user', id, res);
  }
  async deleteById(
    id: UserDeleteByIdRequestIdParamDto,
  ): Promise<UserDeleteByIdResponseDto> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('User with this ID not found.');
    }
    return this.responseService.deleteOne('user', id);
  }
}
