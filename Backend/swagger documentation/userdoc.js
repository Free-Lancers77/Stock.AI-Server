/**
 * @swagger
 * tags:
 *   name: User
 *   description: APIs for managing users
 */

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Signup a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: User inserted successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */

/**
 * @swagger
 * /api/auth/verify_emaile:
 *   post:
 *     summary: Verify the email of the user in order to log in,take the pass code sent to the gmaile :quantonlb@gmail.com
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *              
 *     responses:
 *       200:
 *         description: User verified successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login the user  using his email and pass after verifcation 
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *              
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */




/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: Logout the user   
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              
 *              
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */


/**
 * @swagger
 * /api/auth/check_auth:
 *   get:
 *     summary: To see if the user is logged in when he refresh the page   
 *     tags: [User]
 *    
 *              
 *              
 *     responses:
 *       200:
 *         description: User is logged in 
 *       400:
 *         description: Bad request, missing or invalid data
 */
/**



/**
 * @swagger
 * /api/auth/forget_password:
 *   post:
 *     summary: To send the update pass token   
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *              
 *              
 *     responses:
 *       200:
 *         description: Pass token sent  successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */


/**
 * @swagger
 * /api/auth/reset_password/{token}:
 *   post:
 *     summary: To update the password
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Token to reset the password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: The new password
 *     responses:
 *       200:
 *         description: Password updated successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
