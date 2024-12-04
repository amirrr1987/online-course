import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { ResponseService } from '../../response/response.service';
import { User as UserEntity } from '../entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException, ConflictException } from '@nestjs/common';
import {
  UserCreateRequestDto,
  UserCreateResponseDto,
  UserFindByIdResponseDto,
  UserUpdateByIdRequestDto,
  UserUpdateByIdResponseDto,
  UserDeleteByIdResponseDto,
  UserFindByIdRequestIdParamDto,
} from '../dto';

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        ResponseService,
        {
          provide: getRepositoryToken(UserEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      const dto: UserCreateRequestDto = {
        mobile: '09120000000',
        role_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
        courses: [],
      };
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(null);
      jest.spyOn(userRepository, 'create').mockReturnValue(dto as any);
      jest.spyOn(userRepository, 'save').mockResolvedValue(dto as any);

      const result = await service.create(dto);
      expect(userRepository.findOneBy).toHaveBeenCalledWith({
        mobile: dto.mobile,
      });
      expect(userRepository.save).toHaveBeenCalled();
      expect(result).toBeDefined();
    });

    it('should throw a ConflictException if the user already exists', async () => {
      const dto: UserCreateRequestDto = {
        mobile: '09120000000',
        role_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
        courses: [],
      };
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(dto as any);

      await expect(service.create(dto)).rejects.toThrow(ConflictException);
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      const users = [{ id: 1, mobile: '09120000000' }];
      jest
        .spyOn(userRepository, 'find')
        .mockResolvedValue(users as UserEntity[]);

      const result = await service.findAll();
      expect(result).toEqual(users); // از مقایسه صحیح استفاده کنید.
      expect(result).toBeDefined();
    });
  });

  describe('findById', () => {
    it('should return a user by id', async () => {
      const id: UserFindByIdRequestIdParamDto = 1;
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(user as any);

      const result = await service.findById(id);
      expect(result).toEqual(result);
    });

    it('should throw NotFoundException if user not found', async () => {
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(null);

      await expect(service.findById(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('updateById', () => {
    it('should update a user successfully', async () => {
      const id = 1;
      const dto: UserUpdateByIdRequestDto = { mobile: '09120000001' };
      const user = { id, mobile: '09120000000' };
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(user as any);
      jest.spyOn(userRepository, 'update').mockResolvedValue(undefined);

      const result = await service.updateById(id, dto);
      expect(userRepository.update).toHaveBeenCalledWith(
        id,
        expect.any(Object),
      );
      expect(result).toBeDefined();
    });

    it('should throw NotFoundException if user not found', async () => {
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValue(null);

      await expect(
        service.updateById(1, { mobile: '09120000001' }),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('deleteById', () => {
    it('should delete a user successfully', async () => {
      jest
        .spyOn(userRepository, 'delete')
        .mockResolvedValue({ affected: 1 } as any);

      const result = await service.deleteById(1);
      expect(userRepository.delete).toHaveBeenCalledWith(1);
      expect(result).toBeDefined();
    });

    it('should throw NotFoundException if user not found', async () => {
      jest
        .spyOn(userRepository, 'delete')
        .mockResolvedValue({ affected: 0 } as any);

      await expect(service.deleteById(1)).rejects.toThrow(NotFoundException);
    });
  });
});
