import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
  /**
   * Retrieve all items.
   */
  findAll(data: any[] = [], message = 'Successfully retrieved all items') {
    return {
      statusCode: HttpStatus.OK,
      message,
      data,
    };
  }

  /**
   * Retrieve a single item.
   */
  findOne(data: any = null, message = 'Successfully retrieved the item') {
    if (!data) {
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: HttpStatus.OK,
      message,
      data,
    };
  }

  /**
   * Create a new item.
   */
  createOne(data: any = null, message = 'Successfully created the item') {
    return {
      statusCode: HttpStatus.CREATED,
      message,
      data,
    };
  }

  /**
   * Update an existing item.
   */
  updateOne(
    success: boolean,
    data: any = null,
    message = 'Successfully updated the item',
  ) {
    if (!success) {
      throw new HttpException(
        'Failed to update the item',
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message,
      data,
    };
  }

  /**
   * Delete an item.
   */
  remove(success: boolean, message = 'Successfully deleted the item') {
    if (!success) {
      throw new HttpException(
        'Failed to delete the item',
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      statusCode: HttpStatus.OK,
      message,
    };
  }
}
