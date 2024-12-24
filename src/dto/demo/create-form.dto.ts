import { FieldType } from '@/enums/FieldType';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFormDto {
  @ApiProperty({
    example: 'Formulario de prueba',
    description: 'Título del formulario',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty({
    example: 'Este es un formulario de prueba',
    description: 'Descripción del formulario',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: true,
    description: 'Estado del formulario',
  })
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @ApiProperty({
    example: true,
    description: 'Estado del formulario si es publico o no',
  })
  @IsOptional()
  @IsBoolean()
  is_public?: boolean;

  @ApiProperty({
    example: true,
    description: 'Estado del formulario si esta publicado o no',
  })
  @IsOptional()
  @IsBoolean()
  is_published?: boolean;

  @ApiProperty({
    example: '2021-09-01T00:00:00.000Z',
    description: 'Fecha de inicio del formulario',
  })
  @IsOptional()
  @IsDateString()
  start_at?: string;

  @ApiProperty({
    example: '2021-09-30T23:59:59.000Z',
    description: 'Fecha de finalización del formulario',
  })
  @IsOptional()
  @IsDateString()
  end_at?: string;

  @ApiProperty({
    example: [
      {
        label: 'Nombre',
        field_type: 'short_answer',
        is_required: true,
        order: 1,
      },
      {
        label: 'Edad',
        field_type: 'number',
        is_required: true,
        order: 2,
      },
      {
        label: 'Correo electrónico',
        field_type: 'email',
        is_required: true,
        order: 3,
      },
    ],
    description: 'Campos del formulario',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateFieldDto)
  fields: CreateFieldDto[];
}

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
  @IsOptional()
  @IsInt()
  order?: number;
}
