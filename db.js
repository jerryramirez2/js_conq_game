const Database = require("better-sqlite3");

const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        body TEXT NOT NULL
    );
    `);

module.exports = db;