import swaggerJSDoc from 'swagger-jsdoc';
import url from 'url';
import path from 'path';

// Get __dirname equivalent in ES modules
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Stock Manager.AI',
      version: '1.0.0',
      description: 'API documentation for Stock Manager',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Change this to your production URL when deployed
      },
    ],
  },
  apis: [
    './routes/*.js',
    './controllers/*.js',
    path.join(__dirname, '../swagger documentation/userdoc.js'), // Correctly reference userdoc.js
  ], // Paths to your route and controller files
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
export default swaggerDocs;
