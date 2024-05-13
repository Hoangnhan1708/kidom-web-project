import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Slider from '~/components/Layout/components/Slider';
import Category from '~/components/Layout/components/Category';
import Banner from '~/components/Layout/components/Banner';
import ProductContainer from '~/components/ProductContainer';
import { useState, useEffect } from 'react';

import { fetchData } from '~/utils';
import images from '~/assets/img';
const cx = classNames.bind(styles);

const slideImages = ['Bannerhome.png', 'Bannerhome2.jpg'];

function Home() {
    const [newProducts, setNewProducts] = useState([{}]);
    const [saleProducts, setSaleProducts] = useState([{}]);

    // Fetch to get new products
    useEffect(() => {
        (async () => {
            try {
                const url = 'http://localhost:5000/home/new-products'; // Thay đổi URL thành URL thực tế bạn muốn gọi
                const products = await fetchData(url);
                setNewProducts(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();

        // Fetch to get sale products
        (async () => {
            try {
                const url = 'http://localhost:5000/home/sale-products'; // Thay đổi URL thành URL thực tế bạn muốn gọi
                const products = await fetchData(url);
                setSaleProducts(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Slider className={cx('slideshow')} type="banner" imgs={slideImages} />
            <Category />

            <div className={cx('container')}>
                <Banner title="Sản phẩm mới" />
                <ProductContainer data={newProducts} />
                <Banner title="Khuyến mãi" />
                <ProductContainer title="Khuyến mãi" data={saleProducts} />
            </div>
        </div>
    );
}

export default Home;
