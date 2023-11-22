"use strict";
/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: Endpoints related to user authentication
 *
 * paths:
 *   /auth/verify:
 *     post:
 *       summary: Verify JWT token
 *       description: Endpoint to verify a JWT token by providing the token in the Authorization header.
 *       tags:
 *         - Authentication
 *       produces:
 *         - application/json
 *       parameters:
 *         - name: Authorization
 *           in: header
 *           description: JWT token in the format 'Bearer {token}'
 *           required: true
 *           type: string
 *           format: "Bearer {token}"
 *       responses:
 *         200:
 *           description: Token is valid
 *         401:
 *           description: Unauthorized - Invalid or missing token
 *         500:
 *           description: Internal Server Error
 */
