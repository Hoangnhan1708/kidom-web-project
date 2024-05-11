const Product = require('../models/Product.js')

class ProductController{
    // GET  /
    async index(req,res,next){
        try{
            const products = await Product.find({});
            res.json(products);
            console.log(products.length);
        }catch{
            console.log("bug");
        }
        
    }
}

module.exports = new ProductController;