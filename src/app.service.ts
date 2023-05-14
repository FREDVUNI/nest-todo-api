import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(): any {
    return { name:"Fred",email:"fredvuni809@gmail.com" };
  }
}
