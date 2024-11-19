import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource) {}

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
