/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  // Se 'title' for fornecido, ele deve ser uma string e não pode ser vazio
  @IsOptional() // Permite que 'title' seja omitido na requisição
  @IsString()
  @IsNotEmpty() // Só valida se 'title' estiver presente e não for vazio
  title?: string; // Torna a propriedade opcional no nível do TypeScript

  // Se 'description' for fornecido, ele deve ser uma string e não pode ser vazio
  @IsOptional()
  @IsString()
  @IsNotEmpty() // Só valida se 'description' estiver presente e não for vazio
  description?: string; // Torna a propriedade opcional no nível do TypeScript

  // Se 'completed' for fornecido, ele deve ser um booleano
  @IsOptional() // Permite que 'completed' seja omitido na requisição
  @IsBoolean()
  completed?: boolean; // Torna a propriedade opcional no nível do TypeScript
}
