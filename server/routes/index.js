const productRouter = require('./product.js');
const homeRouter = require('./home.js');


function route(app){
    app.use('/product', productRouter);

    app.use('/home', homeRouter);

}

module.exports = route