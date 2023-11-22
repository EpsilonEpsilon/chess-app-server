"use strict";
/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Endpoints related to user operations
 *
 * paths:
 *   /user/profile:
 *     get:
 *       summary: Get user profile
 *       description: Endpoint to retrieve the user profile. Requires a valid JWT token in the Authorization header.
 *       tags:
 *         - User
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
 *           description: Success
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Status of the request
 *               data:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: User ID
 *                   username:
 *                     type: string
 *                     description: Username
 *                   email:
 *                     type: string
 *                     description: Email
 *         401:
 *           description: Unauthorized - Invalid or missing token
 *         500:
 *           description: Internal Server Error
 */
