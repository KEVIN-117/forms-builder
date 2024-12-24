import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './User.entity';
import { Field } from './Field.entity';
import { Response } from './Response.entity';

@Entity('forms')
export class Form {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @Column({ type: 'boolean', default: false })
  is_public: boolean;

  @Column({ type: 'boolean', default: false })
  is_published: boolean;

  @Column({ type: Date, default: () => 'CURRENT_TIMESTAMP' })
  start_at: Date;

  @Column({ type: Date, nullable: true })
  end_at: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.forms)
  user: User;

  @OneToMany(() => Field, (field) => field.form)
  fields: Field[];

  @OneToMany(() => Response, (response) => response.form, { cascade: true })
  responses: Response[];
}
