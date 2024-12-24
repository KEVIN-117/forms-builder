import { Body, Controller, Get, Post } from '@nestjs/common';
import { DemoServiceService } from '../../services/demo-service/demo-service.service';
import { CreateFieldDto } from '@/dto/field/create-field.dto';
import { CreateFormDto } from '@/dto/demo/create-form.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Demo')
@Controller('demo')
export class DemoControllerController {
  constructor(private readonly demoService: DemoServiceService) {}

  @Post('field')
  @ApiOperation({
    summary: 'Create a field for a form',
  })
  async createField(@Body() data: CreateFieldDto) {
    return await this.demoService.createField(data);
  }

  @Get('field')
  @ApiOperation({
    summary: 'Get all fields',
  })
  async getFields() {
    return await this.demoService.getFields();
  }

  @Post('form')
  @ApiOperation({
    summary: 'Create a form',
  })
  async createForm(@Body() data: CreateFormDto) {
    return await this.demoService.createForm(data);
  }
}
