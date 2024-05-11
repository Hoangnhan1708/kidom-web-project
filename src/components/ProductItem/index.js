import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem({ imgSrc, title, price }) {
    return (
        <div className={`col-3 ${cx('wrapper')}`}>
            <img className={cx('item-img')} src={imgSrc} alt={title} />

            <h3 className={cx('item-heading')}>{title}</h3>
            <label className={cx('item-price')}>{price} VNĐ</label>
            <button className={`btn btn-success btn-lg ${cx('item-add2cart-btn')}`}>Thêm vào giỏ hàng</button>
        </div>
    );
}

export default ProductItem;
