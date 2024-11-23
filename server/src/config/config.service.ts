// src/config/config.service.ts
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { User as UserEntity } from 'src/users/user.entity';

dotenv.config(); // Load environment variables from .env file

@Injectable()
class ConfigService {
  constructor(private env: { [key: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(
        `Configuration error: Missing key ${key} in environment variables.`,
      );
    }
    return value;
  }

  public ensureValues(keys: string[]): ConfigService {
    keys.forEach((key) => this.getValue(key, true));
    return this;
  }

  public getPort(): number {
    const port = this.getValue('PORT', true);
    return parseInt(port, 10) || 5000; // Default to 3000 if invalid
  }

  public isProduction(): boolean {
    const mode = this.getValue('MODE', false);
    return mode === 'PRODUCTION';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT'), 10) || 5432,
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      //   entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')],
      entities: [UserEntity],
      synchronize: false, // Set to true only for development
      ssl: this.isProduction()
        ? { rejectUnauthorized: false } // Enable SSL for production
        : false,
    };
  }
}

// Create and export the ConfigService instance
const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
]);

export { configService };
