import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User as UserEntity } from './user.entity'; // Your entity file path
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(dto: UserDTO.CreateOne.Request): Promise<UserEntity> {
    try {
      const newUser = this.userRepository.create(dto);
      return await this.userRepository.save(newUser);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async findOne(id: UserDTO.FindOne.Request): Promise<UserEntity | undefined> {
    try {
      return await this.userRepository.findOne({ where: { id } });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async update(
    id: UserDTO.UpdateOne.Request['id'],
    dto: UserDTO.UpdateOne.Request,
  ): Promise<UserEntity | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    const updatedUser = { ...user, ...dto };
    return await this.userRepository.save(updatedUser);
  }

  async remove(id: UserDTO.DeleteOne.Request): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return result.affected > 0;
  }
}
