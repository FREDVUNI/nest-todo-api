import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entities';
import { CreateTodoDto } from './dtos/todo.create.dto';
import { UpdateTodoDto } from './dtos/todo.update.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository:Repository<Todo>
  ) {}
  async getTodos():Promise<Todo[]>{
    return this.todoRepository.find()
  }
  async getTodo(id:number):Promise<Todo>{
    return this.todoRepository.findOne({
        where:{
            id
        }
    })
  }
  async createTodo(body:CreateTodoDto){
    return this.todoRepository.save(body)
  }
  async updateTodo(id:number,body:UpdateTodoDto){
    const todo = await this.todoRepository.findOne({
        where:{
            id
        }
    })
    if(!todo) return 
    return this.todoRepository.update(id,body)
  }
  async deleteTodo(id:number){
    const todo = await this.todoRepository.findOne({
        where:{
            id
        }
    })
    if(!todo) return 
    return this.todoRepository.delete(id)
  }   
}
