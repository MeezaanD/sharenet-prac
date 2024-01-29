const express = require('express');
const User = require('./models/user');
const Spots = require('./models/spots');
const config = require('./config/config');

const app = express();

const user = new User(config.db);
const spots = new Spots(config.db);

app.get('/users', (req, res) => {
	user.fetchUsers(req, res);
});

app.get('/spots', (req, res) => {
	spots.fetchSpots(req, res);
});

function startServer() {
	app.listen(config.port, () => {
		console.log(`Server is running on port ${config.port}`);
	});
}

module.exports = {
	startServer,
};
