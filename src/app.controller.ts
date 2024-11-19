import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Тестовое API')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Тест соединения с БД' })
  @ApiResponse({
    status: 200,
    description: 'Connection to the database is successful!',
  })
  @ApiResponse({
    status: 403,
    description:
      'Failed to connect to the database. Please check your configuration.',
  })
  @Get('/test-db-connection')
  async testDatabaseConnection(): Promise<string> {
    return this.appService.testDatabaseConnection();
  }
}
