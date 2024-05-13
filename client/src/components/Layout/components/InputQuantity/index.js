import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './InputQuantity.module.scss';

const cx = classNames.bind(styles);

function InputQuantity() {
    const [quantity, setQuantity] = useState(1);
    return (
        <div className={cx('wrapper')}>
            <button
                onClick={() => {
                    if (quantity === 1) {
                        return;
                    } else {
                        setQuantity(quantity - 1);
                    }
                }}
                className={` ${cx('change-btn', 'left')}`}
            >
                -
            </button>
            <input
                type="number"
                className={cx('input')}
                value={quantity}
                onChange={(e) => setQuantity(e.tartget.value)}
            ></input>
            <button
                onClick={() => {
                    setQuantity(quantity + 1);
                }}
                className={` ${cx('change-btn', 'right')}`}
            >
                +
            </button>
        </div>
    );
}

export default InputQuantity;
