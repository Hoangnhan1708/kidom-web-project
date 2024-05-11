const Product = require('../models/Product.js')

class HomeController{
    // GET  /new-products
    async newProducts(req,res,next){
        try{
            const products = await Product.find({}).limit(4);
            res.json(products);
            console.log(products.length);
        }catch{
            console.log("bug");
        }
        
    }
    // GET  /sale-products
    async saleProducts(req,res,next){
        try{
            const products = await Product.find({}).limit(3);
            res.json(products);
            console.log(products.length);
        }catch{
            console.log("bug");
        }
        
    }
}

module.exports = new HomeController;