import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Response } from './Response.entity';
import { Field } from './Field.entity';

@Entity('response_values')
export class ResponseValue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  value: string;

  @ManyToOne(() => Response, (response) => response.response_values)
  response: Response;

  @ManyToOne(() => Field, (field) => field.response_values)
  field: Field;
}
