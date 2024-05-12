import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import { ENV } from '~/env';
const cx = classNames.bind(styles);
function ProductItem({ imgSrc, title, price,id }) {
    return (
        <div className={`col-3 ${cx('wrapper')}`}>
            <Link className={cx('item-link-box')} to={config.routes.product + '/' + id}>
                <img className={cx('item-img')} src={`${ENV.BASE_URL}/img/product/${imgSrc}`} alt={title} />
    
                <h3 className={cx('item-heading')}>{title}</h3>
            </Link>
            <label className={cx('item-price')}>{price} VNĐ</label>
            <button className={`btn btn-success btn-lg ${cx('item-add2cart-btn')}`}>Thêm vào giỏ hàng</button>
        </div>
    );
}

export default ProductItem;
