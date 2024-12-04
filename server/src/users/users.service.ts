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
import { ResponseService } from '../response/response.service';
import { User as UserEntity } from './entities/user.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UsersService implements IUsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
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
    const updatedData: DeepPartial<UserEntity> = {
      ...dto,
      role: { id: dto.role_id },
      updated_at: new Date(),
    };
    const user = this.userRepository.create(updatedData);
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
    if (!user.id) {
      throw new NotFoundException('User not found.');
    }
    let updatedData: DeepPartial<UserEntity> = {
      ...dto,

      updated_at: new Date(),
    };
    if (dto.role_id) {
      updatedData = {
        ...dto,
        role: { id: dto.role_id },
        updated_at: new Date(),
      };
    }
    await this.userRepository.update(id, updatedData);
    return this.responseService.updateOne('user', id, {});
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
