const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

console.log("Server running on port 3000");
