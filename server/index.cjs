const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database.cjs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Get all bookings (for testing/admin)
app.get('/api/bookings', (req, res) => {
    const sql = "SELECT * FROM bookings ORDER BY created_at DESC";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

// Create a new booking
app.post('/api/bookings', (req, res) => {
    const { name, email, service, date } = req.body;

    if (!name || !email || !service || !date) {
        res.status(400).json({ "error": "Please provide all fields" });
        return;
    }

    const sql = 'INSERT INTO bookings (name, email, service, date) VALUES (?,?,?,?)';
    const params = [name, email, service, date];

    db.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": req.body,
            "id": this.lastID
        })
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
