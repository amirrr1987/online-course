import { Injectable } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Injectable()
export class UsersService {
  create(dto: UserDTO.CreateOne.Request) {
    return dto;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: UserDTO.FindOne.Request) {
    return `This action returns a #${id} user`;
  }

  update(id: UserDTO.UpdateOne.Request['id'], dto: UserDTO.UpdateOne.Request) {
    return `This action updates a #${id} user ,${dto}`;
  }

  remove(id: UserDTO.DeleteOne.Request) {
    return `This action removes a #${id} user`;
  }
}
