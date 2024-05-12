import classNames from 'classnames/bind';
import styles from './ProductContainer.module.scss';

import ProductItem from '../ProductItem';

const cx = classNames.bind(styles);

function ProductContainer({ title, data }) {
    const renderProductRows = () => {
        const rows = [];
        for (let i = 0; i < data.length; i += 4) {
            const rowProducts = data.slice(i, i + 4); // Lấy 4 sản phẩm cho mỗi dòng
            const row = (
                <div className={`row ${cx('list-item')}`} key={i}>
                    {rowProducts.map((item, index) => (
                        <ProductItem
                            key={index}
                            className="col-3"
                            imgSrc={item.imageUrl !== undefined ? item.imageUrl[0] : ''}
                            title={item.name}
                            price={item.price}
                            id={item.id}
                        />
                    ))}
                </div>
            );
            rows.push(row);
        }
        return rows;
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper')}>{renderProductRows()}</div>
            {/* <div className={`row ${cx('list-item')}`}>
                {data.map((item, index) => {
                    const imgs = item.imageUrl;
                    return (
                        <ProductItem
                            key={index}
                            className="col-3"
                            imgSrc={imgs !== undefined ? imgs[0] : ''}
                            title={item.name}
                            price={item.price}
                            id={item.id}
                        />
                    );
                })}
            </div> */}
        </div>
    );
}

export default ProductContainer;
