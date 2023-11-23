/**
 * @swagger
 *
 *
 * paths:
 *   /auth/login:
 *     post:
 *       summary: Authenticate user
 *       description: Endpoint to authenticate a user by providing email and password.
 *       tags:
 *         - Authentication
 *       consumes:
 *         - application/json
 *       produces:
 *         - application/json
 *       parameters:
 *         - name: email
 *           in: formData
 *           description: The email of the user to authenticate.
 *           required: true
 *           type: string
 *         - name: password
 *           in: formData
 *           description: The password of the user to authenticate.
 *           required: true
 *           type: string
 *       responses:
 *         200:
 *           description: Successful authentication
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 description: Authentication token
 *         401:
 *           description: Unauthorized - Invalid credentials
 *         500:
 *           description: Internal Server Error
 */

