import { FieldType } from '@/enums/FieldType';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateFieldDto {
  @ApiProperty({
    example: 'Nombre',
    description: 'Etiqueta del campo',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  label: string;

  @ApiProperty({
    example: 'short_answer',
    description: 'Tipo de campo',
  })
  @IsNotEmpty()
  @IsEnum(FieldType)
  field_type: string;

  @ApiProperty({
    example: true,
    description: 'Estado del campo si es requerido o no',
  })
  @IsOptional()
  @IsBoolean()
  is_required?: boolean;

  @ApiProperty({
    example: ['Opción 1', 'Opción 2', 'Opción 3'],
    description: 'Opciones del campo',
  })
  @IsOptional()
  @IsArray()
  options?: string[];

  @ApiProperty({
    example: 1,
    description: 'Orden del campo',
  })
  @IsInt()
  order: number;

  @ApiProperty({
    example: '1',
    description: 'ID del formulario',
  })
  @IsNotEmpty()
  @IsString()
  form_id: string;
}
