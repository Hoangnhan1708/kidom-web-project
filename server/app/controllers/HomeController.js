const Product = require('../models/Product.js')

class HomeController{
    // GET  /new-products
    async newProducts(req,res,next){
        try{
            const products = await Product.find().sort({ time: -1 }).limit(4);
            res.json(products);
        }catch{
            console.log("bug");
        }
        
    }
    // GET  /sale-products
    async saleProducts(req,res,next){
        try{
            const products = await Product.find().sort({ price: 1 }).limit(4);
            res.json(products);
        }catch{
            console.log("bug");
        }
        
    }
}

module.exports = new HomeController;