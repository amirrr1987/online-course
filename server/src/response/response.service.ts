import { HttpStatus, Injectable } from '@nestjs/common';
import {
  ResponseData,
  ResponseServiceInterface,
} from './response.service.interface';

@Injectable()
export class ResponseService implements ResponseServiceInterface {
  createOne(key: string, id: number): ResponseData {
    return {
      success: true,
      status: HttpStatus.CREATED,
      message: `The ${key} width id: ${id} is created`,
    };
  }
  findOne<T>(key: string, id: number, data: T): ResponseData<T> {
    return {
      success: true,
      status: HttpStatus.OK,
      message: `The ${key} with id: ${id} was found`,
      data: data,
    };
  }
  findAll<T>(key: string, data: T[]): ResponseData<T[]> {
    return {
      success: true,
      status: HttpStatus.OK,
      message: `All ${key}s have been retrieved`,
      data,
    };
  }
  updateOne<T>(key: string, id: number, data: T): ResponseData<T> {
    return {
      success: true,
      status: HttpStatus.OK,
      message: `The ${key} with id: ${id} was updated`,
      data,
    };
  }
  deleteOne(key: string, id: number): ResponseData {
    return {
      success: true,
      status: HttpStatus.OK,
      message: `The ${key} with id: ${id} was deleted`,
    };
  }
}
