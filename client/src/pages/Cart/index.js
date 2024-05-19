import classNames from 'classnames/bind';

import styles from './Cart.module.scss';
import CartItem from '~/components/CartItem';
import { ENV } from '~/env';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);

function Cart({ user }) {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/login/auth/me`, { credentials: 'include' })
            .then((res) => res.json())
            .then((me) => {
                const userId = me.id;

                fetch(`${ENV.SERVER_URL}/cart/show?userId=${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include', // If you need to include cookies in the request
                })
                    .then((res) => res.json())
                    .then((data) => setItems(data));
            });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>Giỏ hàng của bạn</h1>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div className={`row align-items-center`}>
                        <input type="checkbox" className={`col ${cx('checkbox')}`} />
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Hình ảnh</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Sản phẩm</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Đơn giá</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Số lượng</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Số tiền</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Xóa</span>
                        </div>
                    </div>
                </div>
                {items ? (
                    items.map((item) => (
                        <CartItem
                            productId={item.productId}
                            key={item.productId}
                            img={item.imageUrl}
                            price={item.price}
                            name={item.name}
                            oldQuantity={item.quantity}
                        />
                    ))
                ) : (
                    <div>Loading</div>
                )}
                <div className={cx('payment-container')}></div>
            </div>
        </div>
    );
}

export default Cart;
