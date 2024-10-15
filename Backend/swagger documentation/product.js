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



/**
 * @swagger
 * /api/products/UpdateProduct:
 *   post:
 *     summary: Update product details
 *     description: Updates one or more details of a product based on a specified filter and value. Requires Bearer token authentication.
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *         required: true
 *         description: The filter to find the product (e.g., id, Name).
 *       - in: query
 *         name: value
 *         schema:
 *           type: string
 *         required: true
 *         description: The value of the filter to find the product.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Price:
 *                 type: number
 *               Quantity:
 *                 type: number
 *               NbOfPieces:
 *                 type: number
 *               PricePerUnit:
 *                 type: number
 *               dateOfPurchase:
 *                 type: string
 *                 format: date-time
 *               dateOfSelling:
 *                 type: string
 *                 format: date-time
 *                 nullable: true
 *             example:
 *               Name: "Product A"
 *               Price: 100
 *               Quantity: 20
 *               NbOfPieces: 10
 *               PricePerUnit: 10
 *               dateOfPurchase: "2024-01-01T10:00:00Z"
 *               dateOfSelling: null
 *     responses:
 *       200:
 *         description: Successfully updated the product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 Name:
 *                   type: string
 *                 Price:
 *                   type: number
 *                 Quantity:
 *                   type: number
 *                 NbOfPieces:
 *                   type: number
 *                 PricePerUnit:
 *                   type: number
 *                 dateOfPurchase:
 *                   type: string
 *                   format: date-time
 *                 dateOfSelling:
 *                   type: string
 *                   format: date-time
 *                   nullable: true
 *       400:
 *         description: Bad request, filter or value missing or validation errors
 *       404:
 *         description: Product not found
 *       500:
 *         description: Error updating product
 */
/**
 * @swagger
 * /api/products/findProduct:
 *   post:
 *     summary: To filter the product based on there names 
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
 *               Name:
 *                 type: String
 *             
 *               
 *     responses:
 *       200:
 *         description: Product Found
 *       400:
 *         description: Bad request, missing or invalid data
 */
/**
 * @swagger
 * /api/products/deleteProduct:
 *   post:
 *     summary: To filter the product based on there names 
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
 *                 type: Number
 *             
 *               
 *     responses:
 *       200:
 *         description: Product Found
 *       400:
 *         description: Bad request, missing or invalid data
 */