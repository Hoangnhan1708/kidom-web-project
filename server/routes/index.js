const productRouter = require('./product.js');
const homeRouter = require('./home.js');
const loginRouter = require('./login.js');

function route(app) {
    app.use('/product', productRouter);
    app.use('/login', loginRouter);

    app.use('/home', homeRouter);
}

module.exports = route;
