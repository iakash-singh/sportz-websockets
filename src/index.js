import express from 'express';
import {matchRouter} from "./routes/matches.js";

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello from the Sportz API.' });
});

app.use('/matches', matchRouter)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
