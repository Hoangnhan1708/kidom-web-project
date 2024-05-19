const productRouter = require('./product.js');
const homeRouter = require('./home.js');
const loginRouter = require('./login.js');
const cartRouter = require('./cart.js');

const User = require('../app/models/User.js');

function route(app) {
    app.use('/product', productRouter);
    app.use('/login', loginRouter);
    app.use('/profile/:id', async (req, res, next) => {
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.json(user);
    });
    app.use('/cart', cartRouter);
    app.use('/home', homeRouter);
}

module.exports = route;
