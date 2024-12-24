import { Field } from '@modules/database/entities/Field.entity';
import { Response } from '@modules/database/entities/Response.entity';
import { User } from '@modules/database/entities/User.entity';

export class FormDto {
  id: string;
  title: string;
  description?: string;
  is_active: boolean;
  is_public: boolean;
  is_published: boolean;
  start_at: Date;
  end_at: Date;
  created_at: Date;
  updated_at: Date;
  user: Partial<User>;
  fields: Field[];
  responses: Response[];
}
