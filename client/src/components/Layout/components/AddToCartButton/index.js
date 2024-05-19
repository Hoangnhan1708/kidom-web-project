import classNames from 'classnames/bind';

import styles from './AddToCartButton.module.scss';
import { ENV } from '~/env';
// import { useState } from 'react';
const cx = classNames.bind(styles);

function AddToCartButton({ quantity = 1, productId }) {
    // const [userId, setUserId] = useState('');
    const handleAddToCart = () => {
        fetch(`http://localhost:5000/login/auth/me`, { credentials: 'include' })
            .then((res) => res.json())
            .then((me) => {
                const userId = me.id;
                fetch(`${ENV.SERVER_URL}/cart/add`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ userId, productId, quantity }),
                })
                    .then((res) => res.json())
                    .then((message) => alert(message.message));
            });

        // fetch(`${ENV.SERVER_URL}/cart/add`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     credentials: 'include',
        //     body: JSON.stringify({ userId, productId, quantity }),
        // });
        // console.log(userId, quantity, productId);
    };
    return (
        <div onClick={handleAddToCart} className={cx('wrapper')}>
            <button className={`btn btn-success btn-lg ${cx('btn')}`}>Thêm vào giỏ hàng</button>
        </div>
    );
}

export default AddToCartButton;
