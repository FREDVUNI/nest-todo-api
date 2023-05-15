import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entities';

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
  async createTodo(body){
    return this.todoRepository.save(body)
  }
  async updateTodo(id:number,body){
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
