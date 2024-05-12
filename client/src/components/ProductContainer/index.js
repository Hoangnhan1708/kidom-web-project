import classNames from 'classnames/bind';
import styles from './ProductContainer.module.scss';

import ProductItem from '../ProductItem';

const cx = classNames.bind(styles);
function ProductContainer({ title, data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={`row ${cx('list-item')}`}>
                {data.map((item, index) => {
                    const imgs = item.imageUrl;
                    return (
                        <ProductItem
                            key={index}
                            className="col-3"
                            imgSrc={imgs !== undefined ? imgs[0] : ""}
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
