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

3. Create a [.env](http://_vscodecontentref_/24) file with the following content:
    ```
    PORT=4000
    MONGO_URI=mongodb://localhost:27017/uber
    ```

4. Start the server:
    ```sh
    npm start
    ```

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

## License

This project is licensed under the MIT License.
                
                
                
        
        
