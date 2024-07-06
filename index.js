// web-service/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Devesh Singh Rathore');
});

app.listen(PORT, () => {
  console.log(`Web Service is running on port ${PORT}`);
});

