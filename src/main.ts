import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from './config/getEnvs';
import { validationPipe } from './pipe/validation/validation.pipe';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const { PORT } = envs;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Form Builder API')
    .setDescription('this is a form builder system')
    .setVersion('1.0')
    .addTag('NestJS')
    .build();
  const logger = new Logger(app.getHttpServer().constructor.name);
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory(), {
    customSiteTitle: 'Form Builder API',
    customCss: '.swagger-ui .topbar { display: none }',
    swaggerOptions: {
      filter: true,
      showRequestDuration: true,
    },
    swaggerUiEnabled: true,
  });
  app.useGlobalPipes(new validationPipe());
  await app.listen(PORT ?? 3001);
  logger.log(`Application is running on: ${await app.getUrl()}`);
  logger.log(`Application is running on: ${await app.getUrl()}/api-docs`);
}
bootstrap();
