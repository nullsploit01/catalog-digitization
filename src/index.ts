import express from 'express';

const server = express();
const PORT = process.env.PORT || 8080;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('pages/index');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
