"use strict";
/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: Endpoints related to user authentication
 *
 * paths:
 *   /auth/register:
 *     post:
 *       summary: Register a new user
 *       description: Endpoint to register a new user by providing username, email, password, and password confirmation.
 *       tags:
 *         - Authentication
 *       consumes:
 *         - application/json
 *       produces:
 *         - application/json
 *       parameters:
 *         - name: username
 *           in: formData
 *           description: The username for the new user.
 *           required: true
 *           type: string
 *         - name: email
 *           in: formData
 *           description: The email for the new user.
 *           required: true
 *           type: string
 *         - name: password
 *           in: formData
 *           description: The password for the new user.
 *           required: true
 *           type: string
 *         - name: passwordConfirmation
 *           in: formData
 *           description: Confirm the password for the new user.
 *           required: true
 *           type: string
 *       responses:
 *         201:
 *           description: User successfully registered
 *         400:
 *           description: Bad Request - Invalid input or password mismatch
 *         500:
 *           description: Internal Server Error
 */
