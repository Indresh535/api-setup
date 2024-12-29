const express = require('express');
const router = express.Router();

// Dummy data
let data = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Jane Smith', age: 34 },
  { id: 3, name: 'Samuel Green', age: 23 },
];



// GET: Fetch all data
router.get('/users', (req, res) => {
  res.status(200).json(data);
});

// GET: Fetch single user by ID
router.get('/users/:id', (req, res) => {
  const user = data.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// POST: Add a new user
router.post('/users', (req, res) => {
  const { name, age } = req.body;
  const newUser = { id: data.length + 1, name, age };
  data.push(newUser);
  res.status(201).json(newUser);
});

// PUT: Update a user by ID
router.put('/users/:id', (req, res) => {
  const user = data.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    const { name, age } = req.body;
    user.name = name || user.name;
    user.age = age || user.age;
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// DELETE: Remove a user by ID
router.delete('/users/:id', (req, res) => {
  const userIndex = data.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    const deletedUser = data.splice(userIndex, 1);
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

module.exports = router;
