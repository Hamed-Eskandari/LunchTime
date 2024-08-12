

```markdown
# Full-Stack Angular & NestJS Application

This project is a full-stack web application with an Angular frontend and a NestJS backend, using SQLite as the database. Swagger is used for API documentation.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 22.3.0)
- [npm](https://www.npmjs.com/) (Node package manager, version 10.8.1)
- [Angular CLI](https://angular.io/cli)
- [NestJS CLI](https://docs.nestjs.com/cli/overview)

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Hamed-Eskandari/LunchTime.git>
   cd <LunchTime>
   ```

2. Install the backend and frontend dependencies:

   ```bash
   cd backend/lunch-time
   npm install
   cd ../frontend
   npm install/lunch-time
   ```

## Running the Backend

1. Navigate to the `backend` directory:

   ```bash
   cd backend/lunch-time
   ```

2. Start the backend server:

   ```bash
   npm run start
   ```

The backend server will be running at `http://localhost:3000`.

## Running the Frontend

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend/lunch-time
   ```

2. Start the Angular development server:

   ```bash
   ng serve
   ```

The frontend application will be running at `http://localhost:4200`.

## API Documentation

Swagger UI is available for API documentation. After starting the backend, you can access the API documentation at:

```
http://localhost:3000/api
```

## Dependencies

### Backend

- NestJS
- SQLite
- TypeORM
- Swagger

### Frontend

- Angular
- Angular Material
- RxJS

## License

This project is licensed under the MIT License.
```
