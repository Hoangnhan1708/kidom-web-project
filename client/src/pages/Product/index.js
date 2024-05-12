import classNames from 'classnames/bind';
import { useState,useEffect } from 'react';
import axios from 'axios';

import ProductContainer from '~/components/ProductContainer';
import styles from './Product.module.scss';
import FilterContainer from '~/components/FilterContainer';


const cx = classNames.bind(styles);



function Product() {
    const [productData, setProductData] = useState([{}]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/product");
                
                setProductData(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProducts();
    })
    return <div className= {cx("wrapper")}>
        <FilterContainer/>
        <ProductContainer data={productData}/>
    </div>;
}

export default Product;
