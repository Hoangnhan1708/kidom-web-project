const Cart = require('../models/Cart.js');
const Product = require('../models/Product.js');
class CartController {
    // POST  cart/add
    async add(req, res, next) {
        try {
            // Destructure userId, productId, and quantity from request body
            const { userId, productId, quantity, name, price, imageUrl } = req.body;

            // Find existing cart item
            let cartItem = await Cart.findOne({ userId, productId });

            if (!cartItem) {
                // If the cart item doesn't exist, create a new one
                cartItem = new Cart({
                    userId,
                    productId,
                    quantity,
                    name,
                    price,
                    imageUrl,
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
    // GET  cart/add
    async show(req, res, next) {
        const userId = req.query.userId;
        var cartItems = await Cart.find({ userId });

        res.json(cartItems);
    }
    // POST  cart/delete-item
    async deleteItem(req, res, next) {
        const { userId, productId } = req.body;
        const result = await Cart.deleteOne({ userId, productId });
        if (result.deletedCount === 0) {
            res.json({ message: 'Xóa thất bại!' });
        }
        res.json({ message: 'Xóa thành công!' });
    }
}

module.exports = new CartController();
