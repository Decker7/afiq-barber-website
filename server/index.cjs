const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sql } = require('./database.cjs');

const app = express();

// Allow CORS from anywhere (for now) or specify your Vercel domain
app.use(cors());
app.use(bodyParser.json());

// Get all bookings (for testing/admin)
app.get('/api/bookings', async (req, res) => {
    try {
        const { rows } = await sql`SELECT * FROM bookings ORDER BY created_at DESC`;
        res.json({
            "message": "success",
            "data": rows
        });
    } catch (err) {
        res.status(400).json({ "error": err.message });
    }
});

// Create a new booking
app.post('/api/bookings', async (req, res) => {
    const { name, email, service, date } = req.body;

    if (!name || !email || !service || !date) {
        res.status(400).json({ "error": "Please provide all fields" });
        return;
    }

    try {
        const result = await sql`
            INSERT INTO bookings (name, email, service, date) 
            VALUES (${name}, ${email}, ${service}, ${date})
            RETURNING id
        `;

        res.json({
            "message": "success",
            "data": req.body,
            "id": result.rows[0].id
        });
    } catch (err) {
        res.status(400).json({ "error": err.message });
    }
});

// Export the app for Vercel (don't listen if imported)
if (require.main === module) {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
