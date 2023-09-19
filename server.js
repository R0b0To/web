// server.js

const express = require('express');
const redis = require('redis');
const app = express();

// Create a Redis client
const client = redis.createClient({
  host: process.env.UPSTASH_HOST,
  port: process.env.UPSTASH_PORT,
  password: process.env.UPSTASH_PASSWORD,
});

client.on('error', (err) => {
  console.error('Redis Error:', err);
});

// Serve a simple webpage
app.get('/', (req, res) => {
  // Get the user's name from the database
  client.get('user_name', (err, userName) => {
    if (err) {
      console.error('Error getting user name:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(`Hello, ${userName || 'Guest'}!`);
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
