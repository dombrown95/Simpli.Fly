import Database from 'better-sqlite3';
const db = new Database('simpli_fly.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT NOT NULL,
    weight REAL,
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
`);

export default db;