const productRouter = require('./product.js');
const homeRouter = require('./home.js');
const loginRouter = require('./login.js');
const cartRouter = require('./cart.js');
const profileRouter = require('./profile.js');
const User = require('../app/models/User.js');

function route(app) {
    app.use('/product', productRouter);
    app.use('/login', loginRouter);
    app.use('/profile', profileRouter);

    app.post('/signup', async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });

            if (!user) {
                const users = await User.find({}).sort({ id: -1 }).limit(1); // Find the last user
                let newId;

                if (users.length > 0) {
                    const lastUserId = users[0].id;
                    const numericPart = parseInt(lastUserId.match(/\d+$/)[0], 10); // Extract the numeric part
                    newId = `00${numericPart + 1}`; // Increment and create new ID
                } else {
                    newId = '001'; // Handle the case when no users exist
                }
                console.log(newId);
                await User.create({
                    id: newId,
                    username,
                    password,
                });

                res.status(201).json({ message: 'Tạo tài khoản thành công' });
            } else {
                res.status(400).json({ message: 'Tài khoản đã tồn tài' });
            }
        } catch (error) {
            next(error);
        }
    });

    app.use('/cart', cartRouter);
    app.use('/home', homeRouter);
}

module.exports = route;
