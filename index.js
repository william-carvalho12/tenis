const express = require('express')();

express.set('view engine', 'ejs');
express.set('views', './views');

express.get('/', (req, res) => {
  res.render('index');
});

express.listen(3000, () =>{
  console.log('Servidor Ligado');
});