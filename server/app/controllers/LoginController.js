const User = require('../models/User.js');

class LoginController {
    // POST  /new-products
    async verify(req, res, next) {
        try {
            const user = await User.findOne({ username: req.body.username, password: req.body.password });
            console.log(user);
            if (user) {
                res.redirect('http://localhost:3000');
            } else {
                res.status(401).json({ message: 'Tài khoản hoặc mật khẩu không đúng' });
            }

            // res.json(products);
        } catch {
            console.log('bug');
        }
    }
}

module.exports = new LoginController();
