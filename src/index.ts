import express from 'express';

const server = express();
const PORT = process.env.PORT || 8080;

server.get('/', (req, res) => {
  res.json('ok');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
