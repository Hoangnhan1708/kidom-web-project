const Cart = require('../models/Cart.js');

class CartController {
    // GET  cart/add
    async add(req, res, next) {
        try {
            // Destructure userId, productId, and quantity from request body
            const { userId, productId, quantity } = req.body;

            // Find existing cart item
            let cartItem = await Cart.findOne({ userId, productId });

            if (!cartItem) {
                // If the cart item doesn't exist, create a new one
                cartItem = new Cart({
                    userId,
                    productId,
                    quantity,
                });
            } else {
                // If the cart item exists, update the quantity
                cartItem.quantity += quantity;
            }

            // Save the cart item to the database
            await cartItem.save();

            // Send a success response
            res.json({ message: 'Thêm sản phẩm thành công!' });
        } catch (error) {
            console.error('Error adding to cart:', error);
            res.status(500).json({ message: 'Có lỗi xảy ra. Vui lòng thử lại sau.' });
        }
    }
}

module.exports = new CartController();
