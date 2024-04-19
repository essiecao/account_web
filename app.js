// Require dotenv to load environment variables
require('dotenv').config();

// Require the database connection module
const connectDB = require('./config/database');

// Connect to the Database
connectDB();

// Other requires and setup (e.g., Express app, middleware, routes)
const express = require('express');
const app = express();

// Middleware and routes would follow here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
