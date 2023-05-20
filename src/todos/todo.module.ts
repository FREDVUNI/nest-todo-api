import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './entities/todo.entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodoModule {}
