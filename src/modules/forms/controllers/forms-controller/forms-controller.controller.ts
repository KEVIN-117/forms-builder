import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormsServiceService } from '../../services/forms-service/forms-service.service';
import { CreateFormDto } from '@dto/form/create-form.dto';

@Controller('forms')
export class FormsControllerController {
  constructor(private readonly formService: FormsServiceService) {}

  @Post()
  async createForm(@Body() data: CreateFormDto) {
    return await this.formService.createForm(data);
  }

  @Get()
  async getForms() {
    return await this.formService.getForms();
  }
}
