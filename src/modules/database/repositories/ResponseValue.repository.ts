import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ResponseValue } from '../entities/ResponseValue.entity';

@Injectable()
export class ResponseValueRepository extends Repository<ResponseValue> {
  constructor(private dataSource: DataSource) {
    super(ResponseValue, dataSource.createEntityManager());
  }
}
