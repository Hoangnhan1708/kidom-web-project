import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './CartItem.module.scss';
import InputQuantity from '../Layout/components/InputQuantity';

const cx = classNames.bind(styles);
function CartItem({ user, img, name, price, oldQuantity }) {
    const [quantity, setQuantity] = useState(oldQuantity);
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
        </div>
    );
}

export default CartItem;
