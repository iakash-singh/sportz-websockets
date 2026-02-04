import express from 'express';

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello from the Sportz API.' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
