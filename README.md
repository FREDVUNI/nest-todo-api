# NestJS Todo API with MySQL and TypeORM

This is a simple Todo API built with NestJS, using MySQL as the database and TypeORM as the ORM. It allows you to create, read, update, and delete Todo items.

## Prerequisites

Before you can run this application, you need to have the following installed on your machine:

- Node.js (version 14 or later)
- MySQL

## Installation

1. Clone this repository:

```
git clone https://github.com/your-username/nestjs-todo-api.git
```

2. Install the dependencies:

```
cd nestjs-todo-api
npm install
```

3. Set up the database:

   - Create a new MySQL database
   - Create a `.env` file in the root directory with the following contents:

   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=your-mysql-password
   DB_DATABASE=nestjs_todo
   ```

   - Replace `your-mysql-password` with the password for your MySQL user
   - Replace `nestjs_todo` with the name of the MySQL database you created

4. Run the database migrations:

```
npm run migration:run
```

5. Start the application:

```
npm run start:dev
```

The application should now be running on `http://localhost:3000`.

## API Endpoints

### GET /todos

Gets a list of all Todo items.

### POST /todos

Creates a new Todo item.

### GET /todos/:id

Gets a Todo item by ID.

### PUT /todos/:id

Updates a Todo item by ID.

### DELETE /todos/:id

Deletes a Todo item by ID.
