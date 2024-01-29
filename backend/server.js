const express = require('express');
const dotenv = require('dotenv');
const config = require('./config/config');
const routes = require('./routes');

dotenv.config();

const app = express();

// Include your routes and configurations
routes.startServer(app, config);
