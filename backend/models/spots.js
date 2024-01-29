class Spots {
	constructor(db) {
		this.db = db;
	}

	fetchSpots(req, res) {
		const query = 'SELECT * FROM spots';

		this.db.query(query, (err, results) => {
			if (err) {
				console.error('Error querying MySQL for spots:', err);
				res.status(500).json({ error: 'Internal Server Error' });
			} else {
				res.json({ spots: results });
			}
		});
	}
}

module.exports = Spots;
