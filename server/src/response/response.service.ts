import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
  /**
   * Return all items.
   */
  findAll(key: string, data: any[]) {
    return {
      statusCode: HttpStatus.OK,
      message: `All ${key} are returned successfully.`,
      data,
    };
  }

  /**
   * Retrieve a single item.
   */
  findOne(key: string, data: any) {
    return {
      statusCode: HttpStatus.OK,
      message: `The ${key} with ID ${data.id} was found successfully.`,
      data,
    };
  }

  /**
   * Create a new item.
   */
  createOne(key: string, data: any) {
    return {
      statusCode: HttpStatus.CREATED,
      message: `The ${key} was created successfully with ID ${data.id}.`,
      data,
    };
  }

  /**
   * Update an existing item.
   */
  updateOne(key: string, data: any) {
    return {
      statusCode: HttpStatus.OK,
      message: `The ${key} with ID ${data.id} was updated successfully.`,
      data,
    };
  }

  /**
   * Delete an item.
   */
  remove(key: string, id: number) {
    return {
      statusCode: HttpStatus.OK,
      message: `The ${key} with ID ${id} was removed successfully.`,
    };
  }
  notFound(key: string, id: number) {
    return {
      statusCode: HttpStatus.FORBIDDEN,
      message: `The ${key} with ID ${id} was not found.`,
    };
  }
}
