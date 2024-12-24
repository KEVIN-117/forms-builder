import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import { DatabaseProviders } from './modules/database/database.providers';
import { FormsModule } from './modules/forms/forms.module';
import { LoggerModule } from './modules/logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    FormsModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseProviders],
})
export class AppModule {}
