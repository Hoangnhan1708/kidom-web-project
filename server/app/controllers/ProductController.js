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

    // GET  /show-category
    async showCategory(req,res,next){
        try{
            const categories = await Product.distinct("category");
            res.json(categories);
        }catch{
            console.log("bug");
        }
    }

    // GET  /show-brand
    async showBrand(req,res,next){
        try{
            const brands = await Product.distinct("brand");
            res.json(brands);
        }catch{
            console.log("bug");
        }
    }
}

module.exports = new ProductController;