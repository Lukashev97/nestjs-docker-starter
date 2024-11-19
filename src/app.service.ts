import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    private readonly dataSource: DataSource,
  ) {}

  getHello(): any {
    return this.getDatabaseConfig();
  }

  getDatabaseConfig() {
    return {
      host: this.configService.get<string>('DATABASE_HOST'),
      port: this.configService.get<number>('DATABASE_PORT'),
      user: this.configService.get<string>('DATABASE_USER'),
      password: this.configService.get<string>('DATABASE_PASSWORD'),
      name: this.configService.get<string>('DATABASE_NAME'),
    };
  }

  // Метод для тестирования соединения с БД
  async testDatabaseConnection(): Promise<string> {
    try {
      // Инициируем проверку соединения
      await this.dataSource.query('SELECT 1');
      return 'Connection to the database is successful!';
    } catch (error) {
      console.error('Database connection failed:', error);
      throw new Error(
        'Failed to connect to the database. Please check your configuration.',
      );
    }
  }
}
