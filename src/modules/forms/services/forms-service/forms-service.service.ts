import { CreateFieldDto } from '@/dto/field/create-field.dto';
import { CreateFormDto } from '@/dto/form/create-form.dto';
import { Field } from '@/modules/database/entities/Field.entity';
import { Form } from '@/modules/database/entities/Form.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FormsServiceService {
  constructor(
    @InjectRepository(Form) private readonly formRepository: Repository<Form>,
    @InjectRepository(Field)
    private readonly fieldRepository: Repository<Field>,
  ) {}

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

  async getForms() {
    return await this.formRepository.find();
  }
}
