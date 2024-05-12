import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import ProductContainer from '~/components/ProductContainer';
import styles from './Product.module.scss';
import FilterContainer from '~/components/FilterContainer';
import { fetchData } from '~/utils';

const cx = classNames.bind(styles);

function Product() {
    const [productData, setProductData] = useState([{}]);
    useEffect(() => {
        (async () => {
            try {
                const url = 'http://localhost:5000/product'; // Thay đổi URL thành URL thực tế bạn muốn gọi
                const products = await fetchData(url);
                setProductData(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <FilterContainer />
            <ProductContainer data={productData} />
            <nav aria-label="Page navigation example">
                <ul class="pagination pagination-lg">
                    <li class="page-item">
                        <a class="page-link" href="#">
                            Previous
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Product;
