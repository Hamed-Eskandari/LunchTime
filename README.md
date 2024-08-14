# LunchTime

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
   cd ../frontend/lunch-time
   npm install
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


```markdown
## Building and Running the PWA

To build and run the Progressive Web App (PWA):

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend/lunch-time
   ```

2. Build the project for production with PWA support:

   ```bash
   ng build --configuration production
   ```

3. Start the PWA server:

   If you have already set up the PWA server (using `express` and `http-proxy-middleware`), you can run the server with the following command:

   ```bash
   node server.js
   ```

   This will serve the PWA on port `8081`. You can access the PWA at:

   ```
   http://localhost:8081
   ```

4. **Testing PWA in Offline Mode**:

   - Open the application in your browser.
   - Go to the Developer Tools (`F12` or `Ctrl+Shift+I` on Windows/Linux, `Cmd+Option+I` on macOS).
   - Go to the `Application` tab.
   - In the `Service Workers` section, make sure that the Service Worker is registered and activated.
   - To simulate offline mode, go to the `Network` tab and select `Offline` from the throttling dropdown.
   - Open new tabs and refresh the pages to see if the PWA works offline on port `8081`.

5. **Installing PWA on Home Screen**:

   - When you open the application in your browser, you will see an install icon (usually a plus sign or a computer with an arrow) on the right side of the URL bar.
   - Click on the install icon, and follow the prompts to add the application to your home screen.
   - Once installed, you can open the application directly from your home screen as if it were a native app.

```
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
