import express from 'express';

// express application
const app = express();

// Dynamically changed PORT number
const PORT = process.env.PORT || 5000;

console.log(`Serve is running at port ${PORT}`);

app.get('/', (req, res) => {
  res.send({ hi: 'Allen' });
});

app.listen(PORT);
