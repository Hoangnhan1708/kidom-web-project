const Product = require('../models/Product.js')

class ProductController{
    // GET  /
    async index(req,res,next){
        try{
            const products = await Product.find({}).limit(16);
            res.json(products);
        }catch{
            console.log("bug");
        }
        
    }
}

module.exports = new ProductController;