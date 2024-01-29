class User {
	constructor(db) {
		this.db = db;
	}

	fetchUsers(req, res) {
		const query = 'SELECT * FROM user';

		this.db.query(query, (err, results) => {
			if (err) {
				console.error('Error querying MySQL for users:', err);
				res.status(500).json({ error: 'Internal Server Error' });
			} else {
				// Convert boolean values in the response
				const modifiedUsers = results.map(user => ({
					...user,
					subscriber: Boolean(user.subscriber),
					proStatus: Boolean(user.proStatus),
					internal: Boolean(user.internal),
					labs: Boolean(user.labs),
					stream: Boolean(user.stream),
				}));

				res.json({ users: modifiedUsers });
			}
		});
	}
}

module.exports = User;
