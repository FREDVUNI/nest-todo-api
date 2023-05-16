import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/todo.create.dto';
import { UpdateTodoDto } from './dtos/todo.update.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async todos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  async todo(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.getTodo(id);
  }

  @Post()
  async create(body: CreateTodoDto) {
    return this.todoService.createTodo(body);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, body: UpdateTodoDto) {
    return this.todoService.updateTodo(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.deleteTodo(id);
  }
}
