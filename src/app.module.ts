import { Module } from '@nestjs/common';
import { TodoModule } from './todos/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos/entities/todo.entities';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TodoModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'mysql',
        port: ConfigService.get<number>('DB_PORT'),
        host: ConfigService.get<string>('DB_HOST'),
        username: ConfigService.get<string>('DB_USERNAME'),
        password: ConfigService.get<string>('DB_PASSWORD'),
        database: ConfigService.get<string>('DB_DATABASE'),
        entities: [Todo],
        synchronize: ConfigService.get<boolean>('DB_SYNC'),
      }),
    }),
  ],
})
export class AppModule {}
