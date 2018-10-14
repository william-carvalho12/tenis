const express = require('express')();

express.set('view engine', 'ejs');
express.set('views', './views');

express.get('/', (req, res) => {
  res.render('index', {oi:{}});
});

express.get('/oi', (req, res) => {
  res.render('index',{oi:true});
});

express.listen(3000, () =>{
  console.log('Servidor Ligado');
});