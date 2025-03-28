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

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    const stmt = db.prepare('SELECT * FROM users WHERE username = ?');
    const user = stmt.get(username);
  
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
  
    const isPasswordCorrect = bcrypt.compareSync(password, user.password_hash);
    if (!isPasswordCorrect) {
      return res.status(401).send({ error: 'Invalid password' });
    }
  
    res.status(200).send({ message: 'Login successful', userId: user.id });
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

app.post('/api/inventory', (req, res) => {
    const { userId, name, weight, description } = req.body;
    const stmt = db.prepare('INSERT INTO inventory (user_id, name, weight, description) VALUES (?, ?, ?, ?)');
    try {
      stmt.run(userId, name, weight, description);
      res.status(201).send({ message: 'Item added successfully' });
    } catch (err) {
      res.status(500).send({ error: 'Database error' });
    }
  });

app.put('/api/inventory/:id', (req, res) => {
    const { id } = req.params;
    const { userId, name, weight, description } = req.body;
    const stmt = db.prepare('UPDATE inventory SET name = ?, weight = ?, description = ? WHERE id = ? AND user_id = ?');
    try {
      stmt.run(name, weight, description, id, userId);
      res.status(200).send({ message: 'Item updated successfully' });
    } catch (err) {
      res.status(500).send({ error: 'Database error' });
    }
  });

app.delete('/api/inventory/:id', (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    const stmt = db.prepare('DELETE FROM inventory WHERE id = ? AND user_id = ?');
    try {
      stmt.run(id, userId);
      res.status(200).send({ message: 'Item deleted successfully' });
    } catch (err) {
      res.status(500).send({ error: 'Database error' });
    }
  });

app.listen(5000, () => {
    console.log('Server running on port 5000');
  });