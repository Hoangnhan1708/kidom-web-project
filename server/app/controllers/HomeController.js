const Product = require('../models/Product.js')

class HomeController{
    // GET  /
    async index(req,res,next){
        try{
            const products = await Product.find({});
            res.json(products);
            console.log(products);
        }catch{
            console.log("bug");
        }
        
    }
}

module.exports = new HomeController;