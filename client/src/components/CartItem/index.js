import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import styles from './CartItem.module.scss';
import InputQuantity from '../Layout/components/InputQuantity';
import { ENV } from '~/env';
const cx = classNames.bind(styles);

function CartItem({ productId, img, name, price, oldQuantity }) {
    const [quantity, setQuantity] = useState(oldQuantity);
    const [toogle, setToogle] = useState(false);
    const handleToogle = () => {
        setToogle(!toogle);
    };

    const handleDelete = () => {
        fetch(`http://localhost:5000/login/auth/me`, { credentials: 'include' })
            .then((res) => res.json())
            .then((me) => {
                const userId = me.id;
                fetch(`${ENV.SERVER_URL}/cart/delete-item`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({ userId, productId }),
                })
                    .then((res) => res.json())
                    .then((message) => alert(message.message))
                    .then(() => window.location.replace(`${ENV.BASE_URL}cart`));
            });
    };

    return (
        <div className={`row align-items-center ${cx('wrapper')}`}>
            <input type="checkbox" className={`col ${cx('checkbox')}`} />
            <div className={`col ${cx('box')}`}>
                <img className={cx('img')} src={img} alt={name} />
            </div>
            <div className={`col ${cx('box')}`}>
                <span className={`${cx('name')}`}>{name}</span>
            </div>
            <div className={`col ${cx('box')}`}>
                <span className={`${cx('price')}`}>₫{price}</span>
            </div>

            <div className="col">
                <InputQuantity quantity={quantity} setQuantity={setQuantity} className="col" />
            </div>
            <div className={`col ${cx('box')}`}>
                <span className={`${cx('price')}`}>₫{price * quantity}</span>
            </div>
            <div className={`col ${cx('box')}`}>
                <Tippy
                    render={(attrs) => (
                        <div className={cx('confirm-box')} tabIndex="-1" {...attrs}>
                            <span className={cx('confirm-title')}>Bạn chắc chắn muốn bỏ sản phẩm này?</span>
                            <div className={cx('btn-container')}>
                                <button
                                    onClick={handleDelete}
                                    type="button"
                                    className={`btn btn-danger btn-lg ${cx('tippy-btn')}`}
                                >
                                    Xóa
                                </button>
                                <button
                                    onClick={handleToogle}
                                    type="button"
                                    className={`btn btn-secondary btn-lg ${cx('tippy-btn')}`}
                                >
                                    Hủy
                                </button>
                            </div>
                        </div>
                    )}
                    placement="bottom"
                    visible={toogle}
                    interactive={true}
                    onClickOutside={handleToogle}
                >
                    <button onClick={handleToogle} className={` ${cx('delete-btn')}`}>
                        Xóa
                    </button>
                </Tippy>
            </div>
        </div>
    );
}

export default CartItem;
