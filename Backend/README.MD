# /user/registor Endpoint Documentation

## Description
Registers a new user. This endpoint validates the input, hashes the password, creates the user, and generates an authentication token.

## HTTP Method
POST

## Status Codes
- 201: User registered successfully.
- 400: Bad Request when validation fails.

## Request Body
```json
{
  "fullname": {
    "firstname": "string (min 3 characters)",
    "lastname": "string (min 3 characters)"
  },
  "email": "valid email string",
  "password": "string (min 5 characters)"
}
```

## Process Flow
- Validate the request data using express-validator.
- Hash the password.
- Create the user using the user service.
- Generate an authentication token.

## Detailed Process Flow
- Parse the incoming JSON request.
- Validate all fields using express-validator; if validation fails, return a 400 error with detailed messages.
- Hash the password using bcrypt.
- Verify the email does not already exist in the database.
- Create and store the new user record.
- Generate a JWT for user authentication.
- Return the JWT and user details with a 201 status.

## Example Response
### Success (201)
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Error (400)
```json
{
  "errors": [
    {
      "msg": "Invalid email format",
      "param": "email",
      "location": "body"
    }
  ]
}
```

## /user/login Endpoint Documentation

### Description
Logs in an existing user by verifying credentials and generating an authentication token.

### HTTP Method
POST

### Status Codes
- 200: Login successful.
- 400: Bad Request when validation fails.
- 401: Unauthorized for invalid credentials.

### Request Body
```json
{
  "email": "valid email string",
  "password": "string (min 5 characters)"
}
```

### Process Flow
- Validate the request data using express-validator.
- Check that the user exists.
- Verify the password.
- Generate a JWT token.
- Return the token and user details.

### Example Response

#### Success (200)
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error (400/401)
```json
{
  "message": "Invalid credentials" 
}
```
