import { CreateFormDto } from '@/dto/demo/create-form.dto';
import { CreateFieldDto } from '@/dto/field/create-field.dto';
import { Field } from '@/modules/database/entities/Field.entity';
import { Form } from '@/modules/database/entities/Form.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DemoServiceService {
  constructor(
    @InjectRepository(Field)
    private readonly fieldRepository: Repository<Field>,
    @InjectRepository(Form) private readonly formRepository: Repository<Form>,
  ) {}

  async createField(data: CreateFieldDto) {
    const { label, field_type, is_required, options, form_id, order } =
      data as CreateFieldDto;
    const form = await this.formRepository.findOne({
      where: { id: form_id },
    });
    const field = this.fieldRepository.create({
      label: label,
      field_type: field_type,
      is_required: is_required,
      options: options,
      form: form,
      order: order,
    });

    const createdField = await this.fieldRepository.save(field);

    return createdField;
  }

  async getFields() {
    return await this.fieldRepository.find();
  }

  async createForm(data: CreateFormDto) {
    const { description, title, is_active, is_public, is_published, fields } =
      data as CreateFormDto;
    const form = this.formRepository.create({
      title: title,
      description: description,
      is_active: is_active,
      is_public: is_public,
      is_published: is_published,
      created_at: new Date(),
      updated_at: new Date(),
      end_at: new Date(),
      start_at: new Date(),
      user: null,
    });

    const fieldEntities = fields.map((field: CreateFieldDto) => {
      return this.fieldRepository.create({
        label: field.label,
        field_type: field.field_type,
        is_required: field.is_required,
        options: field.options,
        form: form,
        order: field.order,
      });
    });

    form.fields = fieldEntities;
    await this.fieldRepository.save(fieldEntities);
    const formRes = await this.formRepository.save(form);

    return formRes;
  }
}
