import { ResponseValue } from '@modules/database/entities/ResponseValue.entity';
import { Form } from '@modules/database/entities/Form.entity';
import { FieldType } from '@enums/FieldType';

export class FieldDto {
  id: string;
  label: string;
  field_type: FieldType;
  is_required: boolean;
  options?: any;
  order?: number;
  created_at: Date;
  updated_at: Date;
  form: Partial<Form>;
  response_values: ResponseValue[];
}
