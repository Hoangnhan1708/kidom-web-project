import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Slide } from 'react-slideshow-image';
import styles from './ProductDetail.module.scss';
import ProductContainer from '~/components/ProductContainer';
import { ENV } from '~/env';
const cx = classNames.bind(styles);

function ProductDetail() {
    const { id } = useParams(); // Lấy giá trị id từ URL
    const [productData, setProductData] = useState({});
    const [otherProductData, setOtherProductData] = useState([{}]);
    useEffect(() => {
        (async () => {
            try {
                const url = `http://localhost:5000/product/${id}`; // Thay đổi URL thành URL thực tế bạn muốn gọi
                const response = await axios.get(url);
                const product = response.data;
                setProductData(product);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();

        (async () => {
            try {
                const url = `http://localhost:5000/product/`; // Thay đổi URL thành URL thực tế bạn muốn gọi
                const response = await axios.get(url);
                const otherProduct = response.data;
                setOtherProductData(otherProduct);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={`row ${cx('inner')}`}>
                <div className={`col-6 ${cx('slideshow')}`}>
                    <Slide>
                        {productData.imageUrl !== undefined
                            ? productData.imageUrl.map((img, index) => {
                                  return (
                                      <img
                                          key={index}
                                          className={cx('slide-img')}
                                          src={`${ENV.BASE_URL}/img/product/${img}`}
                                          alt="slide"
                                      />
                                  );
                              })
                            : null}
                    </Slide>
                </div>
                <div className={`col-6 ${cx('infor')}`}>
                    <h1>{productData.name}</h1>
                </div>
            </div>
            <ProductContainer data={otherProductData} />
        </div>
    );
}

export default ProductDetail;
