var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic video game',
    description: 'Awsonme game ',
    price: 10
    }),
    new Product({
        imagePath: 'https://cdn.egy.best/serve/movies/art-1984235019-x175.jpg',
        title: 'Mission Impossible',
        description: 'Awsonme film ',
        price: 11
    }),
    new Product({
        imagePath: 'https://cdn.egy.best/serve/movies/art-2016991808-x175.jpg',
        title: 'the meg',
        description: 'Awsonme meg ',
        price: 12
    }),
    new Product({
        imagePath: 'https://cdn.egy.best/serve/movies/art-2054913562-x175.jpg',
        title: 'the Predator',
        description: 'Awsonme game ',
        price: 13
    }),
    new Product({
        imagePath: 'https://cdn.egy.best/serve/movies/art-2007625438-x175.jpg',
        title: 'Sky Scrapper',
        description: 'Action ',
        price: 14
    }),
    new Product({
        imagePath: 'https://cdn.egy.best/serve/movies/art-2029696630-x175.jpg',
        title: 'the nun',
        description: 'Horor ',
        price: 15
    }),
];
var done=0;
for(var i=0 ; i< products.length; i++){
    products[i].save(function(err,result){
        done++;
        if(done === products.lenght){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}