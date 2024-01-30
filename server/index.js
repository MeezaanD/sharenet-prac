const express = require('express');
const cors = require('cors'); // Import cors
const connection = require('./config');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

app.get('/workshops', (req, res) => {
	connection.query('SELECT * FROM workshops', (error, results) => {
		if (error) {
			console.error('Error fetching workshops: ', error);
			res.status(500).json({ error: 'Internal Server Error' });
		} else {
			res.json(results);
		}
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
