import express from 'express';
import db from './db.js';
import bcrypt from 'bcrypt';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const stmt = db.prepare('INSERT INTO users (username, password_hash) VALUES (?, ?)');
  try {
    stmt.run(username, hashedPassword);
    res.status(201).send({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).send({ error: 'Username already exists' });
  }
});

app.get('/api/inventory/:userId', (req, res) => {
  const { userId } = req.params;
  db.all('SELECT * FROM inventory WHERE user_id = ?', [userId], (err, rows) => {
    if (err) {
      res.status(500).send({ error: 'Database error' });
    } else {
      res.status(200).json(rows);
    }
  });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
  });