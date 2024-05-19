const User = require('../models/User.js');
const Session = require('../models/Session.js');
class LoginController {
    // POST  /login/auth
    async auth(req, res, next) {
        try {
            const user = await User.findOne({ username: req.body.username, password: req.body.password });
            if (!user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            const sessionId = Date.now().toString();
            await Session.create({
                sessionId: sessionId,
                subject: { sub: user.id },
            });

            res.setHeader('Set-Cookie', `sessionId=${sessionId}; httpOnly; max-age=3600`).json(user);
            // res.json(products);
        } catch {
            console.log('bug');
        }
    }

    // GET  /login/auth/me
    async showMe(req, res, next) {
        const session = await Session.findOne({ sessionId: req.cookies.sessionId });
        if (!session) {
            return;
        }
        const user = await User.findOne({ id: session.subject.sub });
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.json(user);
    }

    // GET  /login/logout
    async logout(req, res, next) {
        const sessionId = req.cookies.sessionId;
        if (!sessionId) {
            return res.status(400).json({ message: 'Session ID is missing' });
        }
        const result = await Session.deleteOne({ sessionId: sessionId });
        if (result.deletedCount === 0) {
            return res.status(400).json({ message: 'Session not found' });
        }

        res.setHeader('Set-Cookie', 'sessionId=; Max-Age=0; HttpOnly; Path=/');
        return res.json({ success: true, message: 'Logged out successfully' });
    }
}

module.exports = new LoginController();
