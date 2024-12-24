import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Response } from '../entities/Response.entity';

@Injectable()
export class ResponseRepository extends Repository<Response> {
  constructor(private dataSource: DataSource) {
    super(Response, dataSource.createEntityManager());
  }
}
