/**
 * @swagger
 * tags:
 *   name: Products
 *   description: APIs for managing products
 */

/**
 * @swagger
 * /api/products/AddProduct:
 *   post:
 *     summary: Add a new product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []   # Apply bearer token only to this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               Name:
 *                 type: string
 *               Price:
 *                 type: number
 *               Quantity:
 *                 type: number
 *               NbOfPieces:
 *                 type: number
 *              
 *     responses:
 *       200:
 *         description: Product inserted successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */
/**
 * @swagger
 * /api/products/getAllProducts:
 *   get:
 *     summary: To retrieve all products for a given user
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []   # Add bearer token security to this endpoint
 *     responses:
 *       200:
 *         description: A list of products
 *       400:
 *         description: Bad request, missing or invalid data
 */


/**
 * @swagger
 * /api/products/Pricing:
 *   post:
 *     summary: To add the pricing on the new products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []   # Apply bearer token only to this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               precentage_of_profit:
 *                 type: Number
 *               
 *     responses:
 *       200:
 *         description: Product Priced successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */

/**
 * @swagger
 * /api/products/Sell:
 *   post:
 *     summary: To Sell a Given product
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []   # Apply bearer token only to this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               number_to_sell:
 *                 type: Number
 *               
 *     responses:
 *       200:
 *         description: Product Sold successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */


/**
 * @swagger
 * /api/products/Stock:
 *   get:
 *     summary: To See my Current Stock
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []   # Add bearer token security to this endpoint
 *     responses:
 *       200:
 *         description: My stock
 *       400:
 *         description: Bad request, missing or invalid data
 */


/**
 * @swagger
 * /api/products/Jarde:
 *   get:
 *     summary: To See my Jarde
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []   # Add bearer token security to this endpoint
 *     responses:
 *       200:
 *         description: My Jarde
 *       400:
 *         description: Bad request, missing or invalid data
 */


/**
 * @swagger
 * /api/products/MonthlyJarde:
 *   get:
 *     summary: To See my  Monthly Jarde
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []   # Add bearer token security to this endpoint
 *     responses:
 *       200:
 *         description: My Jarde
 *       400:
 *         description: Bad request, missing or invalid data
 */


/**
 * @swagger
 * /api/products/AddQuantity:
 *   post:
 *     summary: To add the quantity to my stock 
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []   # Apply bearer token only to this endpoint
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *               newQuantity:
 *                 type: Number
 *               
 *     responses:
 *       200:
 *         description: Product Sold successfully
 *       400:
 *         description: Bad request, missing or invalid data
 */




