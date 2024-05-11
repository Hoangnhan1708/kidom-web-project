import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Slider from '~/components/Layout/components/Slider';
import Category from '~/components/Layout/components/Category';
import Banner from '~/components/Layout/components/Banner';
import ProductContainer from '~/components/ProductContainer';
import { useState,useEffect } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);


function Home() {
    const [backendData,setBackendData] = useState([{}]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api");
                console.log(response);
                
                setBackendData(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

        

    return (
        <div className={cx('wrapper')}>
            <Slider />
            <Category />

            <div className={cx('container')}>
                <Banner className={cx('banner')} title="Sản phẩm mới" />
                <ProductContainer data={backendData} />
                <Banner className={cx('banner')} title="Khuyến mãi" />
                <ProductContainer title="Khuyến mãi" data={backendData} />
            </div>
        </div>
    );
}

export default Home;
