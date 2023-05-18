import { IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  item: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;
}
