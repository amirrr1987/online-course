import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import {
  UserCreateRequestDto,
  UserCreateResponseDto,
  UserFindAllResponseDto,
  UserFindByIdResponseDto,
  UserUpdateByIdRequestDto,
  UserUpdateByIdResponseDto,
  UserDeleteByIdResponseDto,
} from '../dto';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findById: jest.fn(),
            updateById: jest.fn(),
            deleteById: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call service.create and return created user', async () => {
      const dto: UserCreateRequestDto = { mobile: '09120000000', role_id: 1 };
      const response: UserCreateResponseDto = {
        id: 1,
        message: 'User created',
      };
      jest.spyOn(service, 'create').mockResolvedValue(response);

      const result = await controller.create(dto);
      expect(service.create).toHaveBeenCalledWith(dto);
      expect(result).toEqual(response);
    });
  });

  describe('findAll', () => {
    it('should call service.findAll and return all users', async () => {
      const response: UserFindAllResponseDto = { users: [], count: 0 };
      jest.spyOn(service, 'findAll').mockResolvedValue(response);

      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(response);
    });
  });

  describe('findById', () => {
    it('should call service.findById and return the user', async () => {
      const id = 1;
      const response: UserFindByIdResponseDto = { id, mobile: '09120000000' };
      jest.spyOn(service, 'findById').mockResolvedValue(response);

      const result = await controller.findById(id);
      expect(service.findById).toHaveBeenCalledWith(id);
      expect(result).toEqual(response);
    });
  });

  describe('updateById', () => {
    it('should call service.updateById and return updated user', async () => {
      const id = 1;
      const dto: UserUpdateByIdRequestDto = { mobile: '09120000001' };
      const response: UserUpdateByIdResponseDto = {
        id,
        message: 'User updated',
      };
      jest.spyOn(service, 'updateById').mockResolvedValue(response);

      const result = await controller.updateById(id, dto);
      expect(service.updateById).toHaveBeenCalledWith(id, dto);
      expect(result).toEqual(response);
    });
  });

  describe('deleteById', () => {
    it('should call service.deleteById and return confirmation', async () => {
      const id = 1;
      const response: UserDeleteByIdResponseDto = {
        id,
        message: 'User deleted',
      };
      jest.spyOn(service, 'deleteById').mockResolvedValue(response);

      const result = await controller.deleteById(id);
      expect(service.deleteById).toHaveBeenCalledWith(id);
      expect(result).toEqual(response);
    });
  });
});
