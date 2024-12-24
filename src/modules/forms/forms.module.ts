import { Module } from '@nestjs/common';
import { FormsServiceService } from './services/forms-service/forms-service.service';
import { FormsControllerController } from './controllers/forms-controller/forms-controller.controller';
import { DemoServiceService } from './services/demo-service/demo-service.service';
import { DemoControllerController } from './controllers/demo-controller/demo-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Form } from '../database/entities/Form.entity';
import { Field } from '../database/entities/Field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Form, Field])],
  providers: [FormsServiceService, DemoServiceService],
  controllers: [FormsControllerController, DemoControllerController],
})
export class FormsModule {}
