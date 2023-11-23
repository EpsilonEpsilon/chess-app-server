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

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - userId
 *         - title
 *         - body
 *       properties:
 *         id:
 *           type: integer
 *           description: The Auto-generated id of a post
 *         userId:
 *           type: integer
 *           description: id of author
 *         title:
 *           type: string
 *           description: title of post
 *         body:
 *           type: string
 *           descripton: content of post
 *       example:
 *         id: 1
 *         userId: 1
 *         title: my title
 *         body: my article
 *
 */

/**
 * @swagger
 *  tags:
 *    name: Posts
 *    description: posts of users
 */
/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Returns all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: the list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
