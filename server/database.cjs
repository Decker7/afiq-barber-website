const { sql } = require('@vercel/postgres');

// Initialize the database table if it doesn't exist
async function initDB() {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        service TEXT NOT NULL,
        date TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
        console.log('Bookings table ready (Postgres).');
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

initDB();

module.exports = { sql };
