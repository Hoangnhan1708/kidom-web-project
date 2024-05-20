const User = require('../models/User.js');

class ProfileController {
    // GET  /profile/edit
    async show(req, res, next) {
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        res.json(user);
    }

    // GET  /profile/edit
    async edit(req, res, next) {
        try {
            const { id, name, imageUrl } = req.body;
            const user = await User.findOne({ id });
            if (!user) {
                return res.status(401).json({ message: 'Unauthorized' });
            }
            if (name) {
                user.name = name;
            }

            if (imageUrl) {
                user.avatarUrl = imageUrl;
            }
            await user.save();
            res.status(200).json({ message: 'Chỉnh sửa thành công!' });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProfileController();
