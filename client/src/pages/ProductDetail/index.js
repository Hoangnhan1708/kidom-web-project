import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Slide } from 'react-slideshow-image';
import styles from './ProductDetail.module.scss';
import ProductContainer from '~/components/ProductContainer';
import { ENV } from '~/env';
import InputQuantity from '~/components/Layout/components/InputQuantity';
import AddToCartButton from '~/components/Layout/components/AddToCartButton';
import Banner from '~/components/Layout/components/Banner';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function ProductDetail({ user }) {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
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
    }, [id]);
    return (
        <div className={cx('wrapper')}>
            <div className={`row ${cx('general-info')}`}>
                <div className={`col-6 ${cx('slideshow')}`}>
                    <Slide>
                        {productData.imageUrl !== undefined && productData.imageUrl.length > 0 ? (
                            productData.imageUrl.map((img, index) => {
                                return (
                                    <img
                                        key={index}
                                        className={cx('slide-img')}
                                        src={`${ENV.BASE_URL}/img/product/${img}`}
                                        alt="slide"
                                    />
                                );
                            })
                        ) : (
                            <div>Loading...</div>
                        )}
                    </Slide>
                </div>
                <div className={`col-6 ${cx('infor')}`}>
                    <img
                        className={cx('kittyfly', 'icon')}
                        src={`${ENV.BASE_URL}/img/cute/kittyfly.png`}
                        alt="kittyfly"
                    />
                    <img className={cx('cloud', 'icon')} src={`${ENV.BASE_URL}/img/cute/cloud.png`} alt="cloud" />
                    <img
                        className={cx('popsicle', 'icon')}
                        src={`${ENV.BASE_URL}/img/cute/popsicle.png`}
                        alt="popsicle"
                    />
                    <img className={cx('stars', 'icon')} src={`${ENV.BASE_URL}/img/cute/stars.png`} alt="stars" />
                    <img className={cx('panda', 'icon')} src={`${ENV.BASE_URL}/img/cute/panda.png`} alt="panda" />
                    <h1 className={cx('title')}>{productData.name}</h1>
                    <h2 className={cx('price')}>{productData.price} VNĐ</h2>
                    <InputQuantity quantity={quantity} setQuantity={setQuantity} />
                    <AddToCartButton quantity={quantity} productId={productData.id} />
                </div>
            </div>
            <div className={` ${cx('detail-info')}`}>
                <h2 className={cx('detail-heading')}>Chi tiết sản phẩm</h2>
                <div className={cx('detail-row')}>
                    <label className={cx('detail-label')}>Tên sản phẩm: </label>
                    {'   ' + productData.name}
                </div>
                <div className={cx('detail-row')}>
                    <label className={cx('detail-label')}>Giá sản phẩm: </label>
                    {'   ' + productData.price}
                </div>
                <div className={cx('detail-row')}>
                    <label className={cx('detail-label')}>Thương hiệu sản phẩm: </label>
                    {'   ' + productData.brand}
                </div>
                <div className={cx('detail-row')}>
                    <label className={cx('detail-label')}>Đánh giá: </label>
                    {'   ' + productData.star} <FontAwesomeIcon className={cx('detail-icon')} icon={faStar} />
                </div>
                <br />
                <h2 className={cx('detail-heading')}>Mô tả sản phẩm</h2>
                <p className={cx('detail-description')}>{productData.description}</p>
            </div>

            <Banner title="Các sản phẩm khác" />
            <ProductContainer data={otherProductData} />
        </div>
    );
}

export default ProductDetail;
