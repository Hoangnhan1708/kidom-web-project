import classNames from 'classnames/bind';

import styles from './Cart.module.scss';
import CartItem from '~/components/CartItem';
import { ENV } from '~/env';
const cx = classNames.bind(styles);

function Cart() {
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
                    </div>
                </div>
                <CartItem
                    img={`${ENV.BASE_URL}/img/product/OD001_thumb.jpg`}
                    price={100000}
                    name={'Bộ lưới và bóng bóng rổ Nerf Sports Nerfoop'}
                    oldQuantity={1}
                />
            </div>
        </div>
    );
}

export default Cart;
