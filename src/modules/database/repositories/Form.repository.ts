import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Form } from '../entities/Form.entity';

@Injectable()
export class FormRepository extends Repository<Form> {
  constructor(private dataSource: DataSource) {
    super(Form, dataSource.createEntityManager());
  }
}
