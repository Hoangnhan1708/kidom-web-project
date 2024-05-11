import classNames from 'classnames/bind';
import styles from './ProductContainer.module.scss';

import ProductItem from '../ProductItem';
import images from '~/assets/img';
// import images from '~/assets/img';
const cx = classNames.bind(styles);
function ProductContainer({ title, data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={`row ${cx('list-item')}`}>
                {data.map((item, index) => {
                    return (
                        <ProductItem
                            key={index}
                            className="col-3"
                            imgSrc={images.product1_thumb}
                            title={item.name}
                            price={item.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default ProductContainer;
