var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');


/* GET home page. */
var csrfProtection = csrf();
router.use(csrfProtection);
router.get('/', function(err, res, next) {

  Product.find(function(err,docs){
    //res.send(docs.slice(0,3));
    var productChunks= [];
    var chunkSize=3;
    console.log(docs.length);
    for(var i=0 ; i< docs.length;i +=chunkSize){
      productChunks.push(docs.slice(i,i + chunkSize));
    }
  res.render('shop/index', { title: 'Shopping Cart' , products: productChunks });
  });
});

router.get('/user/signup',function(req,res,next){
  res.render('user/signup',{csrfToken: req.csrfToken()});
}); 
router.post('/user/signup',function(req,res,next){
  res.redirect('/');
});
module.exports = router;
