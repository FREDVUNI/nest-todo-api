import { IsNumber, IsString, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsNumber()
  id: number;

  @IsString()
  item: string;

  @IsBoolean()
  completed: boolean;
}
