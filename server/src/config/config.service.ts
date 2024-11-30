import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { Role as RoleEntity } from 'src/roles/entities/role.entity';

dotenv.config();
@Injectable()
export class ConfigService {
  constructor() {}

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [RoleEntity],
      synchronize: false,
    };
  }
}
export const config = new ConfigService();
