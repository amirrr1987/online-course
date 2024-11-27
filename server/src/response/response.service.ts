import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ResponseDTO } from './response.dto';

export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}

@Injectable()
export class ResponseService {
  /**
   * Return all items.
   */
  findAll(key: string, data: any) {
    return {
      statusCode: HttpStatus.OK,
      message: `All ${key} are returned successfully.`,
      data,
    };
  }

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
  createOne(key: string, id: number) {
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: `The ${key} was created successfully with ID ${id}.`,
    };
  }

  /**
   * Update an existing item.
   */
  updateOne(key: string, id: number): ResponseDTO.UpdateOne {
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: `The ${key} with ID ${id} was updated successfully.`,
    };
  }

  /**
   * Delete an item.
   */
  remove(key: string, id: number): ResponseDTO.DeleteOne {
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: `The ${key} with ID ${id} was removed successfully.`,
    };
  }
  notFound(key: string, id: number) {
    return {
      statusCode: HttpStatus.NOT_FOUND,
      message: `The ${key} with ID ${id} was not found.`,
    };
  }
  /**
   * Return conflict message.
   */
  conflict(key: string, message: string) {
    return {
      statusCode: HttpStatus.CONFLICT,
      message: `Conflict: ${key} - ${message}`,
    };
  }

  /**
   * Return unauthorized access message.
   */
  unauthorized(message = 'Unauthorized access.') {
    return {
      statusCode: HttpStatus.UNAUTHORIZED,
      message,
    };
  }

  /**
   * Return forbidden access message.
   */
  forbidden(message = 'Forbidden access.') {
    return {
      statusCode: HttpStatus.FORBIDDEN,
      message,
    };
  }

  /**
   * Return bad request message.
   */
  badRequest(message: string) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      message,
    };
  }

  /**
   * Return internal server error message.
   */
  internalError(message = 'Internal server error.') {
    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message,
    };
  }

  /**
   * Return custom success message.
   */
  success(message: string, data?: any) {
    return {
      statusCode: HttpStatus.OK,
      message,
      data,
    };
  }

  error(error: any) {
    new ForbiddenException();
    switch (error.code) {
      // PostgreSQL Error Codes
      case '25200': // Unique violation
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'The requested resource has duplicate value.',
        };

      case '23505': // Unique violation
        return {
          statusCode: HttpStatus.CONFLICT,
          message: 'The requested resource has duplicate value.',
        };

      case '23503': // Foreign key violation
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message:
            'The request involves invalid references to other resources.',
        };

      case '22P02': // Invalid text representation (e.g., invalid UUID)
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Invalid input format provided.',
        };

      case '22001': // String data right truncation
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Input value exceeds the allowed length.',
        };

      case '23502': // Not null violation
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'A required field is missing in the request.',
        };

      case '42601': // Syntax error
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'There is a syntax error in the database query.',
        };

      case '40001': // Serialization failure
        return {
          statusCode: HttpStatus.CONFLICT,
          message: 'A conflict occurred. Please retry the operation.',
        };

      // Generic application errors
      case 'AUTH001': // Authentication error
        return {
          statusCode: HttpStatus.UNAUTHORIZED,
          message: 'Authentication failed. Please check your credentials.',
        };

      case 'PERM001': // Permission denied
        return {
          statusCode: HttpStatus.FORBIDDEN,
          message:
            'You do not have the necessary permissions to perform this action.',
        };

      case 'VALID001': // Validation error
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Input validation failed. Please check your data.',
        };

      // Default fallback
      default:
        return {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message || 'An unexpected error occurred.',
        };
    }
  }

  /**
   * Return no content message.
   */
  noContent(message = 'No content available.') {
    return {
      statusCode: HttpStatus.NO_CONTENT,
      message,
    };
  }

  test(error) {
    if ((error.status = HttpStatus.FORBIDDEN)) {
    }
    switch (error.status) {
      case HttpStatus.CONFLICT:
        throw new HttpException(error.message, HttpStatus.CONFLICT);
      case HttpStatus.NOT_FOUND:
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      case HttpStatus.OK:
        throw new HttpException(error.message, HttpStatus.OK);
      case HttpStatus.FORBIDDEN:
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
      case HttpStatus.FORBIDDEN:
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }
}
