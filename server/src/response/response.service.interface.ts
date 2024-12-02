export class ResponseData<T = any> {
  success: boolean;
  status: number;
  message: string;
  data?: T; // داده‌های اختیاری
}

export interface ResponseServiceInterface {
  createOne(key: string, id: number): ResponseData;
  findOne<T>(key: string, id: number, data: T): ResponseData<T>;
  findAll<T>(key: string, data: T[]): ResponseData<T[]>;
  updateOne<T>(key: string, id: number, data: T): ResponseData<T>;
  deleteOne(key: string, id: number): ResponseData;
}
