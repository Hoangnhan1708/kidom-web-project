import classNames from 'classnames/bind';

import styles from './AddToCartButton.module.scss';

const cx = classNames.bind(styles);

function AddToCartButton() {
    return (
        <div className={cx('wrapper')}>
            <button className={`btn btn-success btn-lg ${cx('btn')}`}>Thêm vào giỏ hàng</button>
        </div>
    );
}

export default AddToCartButton;
