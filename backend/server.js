const config = require('./config/config');
const routes = require('./routes');
const cors = require('cors');

app.use(cors({ origin: '*', credentials: true }));
routes.startServer(config);
