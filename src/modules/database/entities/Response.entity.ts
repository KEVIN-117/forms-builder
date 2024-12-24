import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Form } from './Form.entity';
import { ResponseValue } from './ResponseValue.entity';

@Entity('responses')
export class Response {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'timestamp' })
  submitted_at: Date;

  @ManyToOne(() => Form, (form) => form.responses)
  form: Form;

  @OneToMany(() => ResponseValue, (responseValue) => responseValue.response)
  response_values: ResponseValue[];
}
