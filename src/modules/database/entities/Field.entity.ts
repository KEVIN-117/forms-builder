import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Form } from './Form.entity';
import { ResponseValue } from './ResponseValue.entity';
import { FieldType } from '@enums/FieldType';

@Entity('fields')
export class Field {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  label: string;

  @Column({
    type: 'enum',
    enum: FieldType,
  })
  field_type: string;

  @Column({ type: 'boolean', default: true })
  is_required: boolean;

  @Column({ type: 'text', nullable: true })
  options?: any;

  @Column({ type: 'int' })
  order: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => Form, (form) => form.fields)
  form: Form;

  @OneToMany(() => ResponseValue, (responseValue) => responseValue.field)
  response_values: ResponseValue[];
}
