# Uber Clone Project

This project is a clone of the Uber application, consisting of a backend built with Node.js and Express, and a frontend built with React and Vite.

## Project Structure

  ## Backend

The backend is built with Node.js and Express. It includes the following main components:

- **app.js**: Sets up the Express application and connects to the database.
- **server.js**: Creates and starts the HTTP server.
- **controller/user.controller.js**: Contains the user controller logic.
- **DB/Db.js**: Handles the connection to the MongoDB database.
- **models/user.model.js**: Defines the user model schema.
- **routes/user.routes.js**: Defines the user-related routes.

### Running the Backend

1. Navigate to the `Backend` directory:
    ```sh
    cd Backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

### API Endpoints

#### User Registration
// ...existing registration endpoint documentation...

#### User Login

- **Endpoint:** `/user/login`  
- **Method:** POST  
- **Request Body:**
  ```json
  {
    "email": "valid email string",
    "password": "string (min 5 characters)"
  }
  ```
- **Success Response (200):**
  ```json
  {
    "user": { "id": "user_id", "email": "user@example.com", ... },
    "token": "jwt_token_here"
  }
  ```
- **Error Responses:**
  - 404: User not found.
  - 401: Invalid credentials.
  - 400: Validation error.

## Frontend

The frontend is built with React and Vite. It includes the following main components:

- **src/App.jsx**: Defines the main application component and routes.
- **src/pages**: Contains the different page components (Home, UserLogin, UserSignup, Captionlogin, Captionsignup).
- **src/main.jsx**: Entry point of the React application.
- **tailwind.config.js**: Tailwind CSS configuration.
- **vite.config.js**: Vite configuration.

### Running the Frontend

1. Navigate to the `Frontend/Uber-Frontend` directory:
    ```sh
    cd Frontend/Uber-Frontend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

Note: Make sure you run these commands in the `Uber-Frontend` folder, as that's where package.json is located.

## License

This project is licensed under the MIT License.





