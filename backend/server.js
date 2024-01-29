const express = require('express');
const dotenv = require('dotenv');
const config = require('./config/config');
const routes = require('./routes');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors({ origin: '*' }));

// Include your routes and configurations
routes.startServer(app, config);
