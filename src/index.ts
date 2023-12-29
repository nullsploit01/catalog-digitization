import express from 'express';

const server = express();
const PORT = process.env.PORT || 8080;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  //   res.json({ response: 'What do ya know? It works! Does it? It Does!!' });
  res.render('pages/index');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
