import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Field } from '../entities/Field.entity';

@Injectable()
export class FieldRepository extends Repository<Field> {
  constructor(private dataSource: DataSource) {
    super(Field, dataSource.createEntityManager());
  }
}
