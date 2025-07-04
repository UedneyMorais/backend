/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
  @IsOptional()
  completed: boolean;
}
