import classNames from 'classnames/bind';
import styles from './FilterContainer.module.scss';
import { useState,useEffect } from 'react';

import { fetchData } from '~/utils';

const cx = classNames.bind(styles);
function FilterContainer() {

    const [categoryData, setCategoryData] = useState([]);
    const [brandData, setBrandData] = useState([]);
    useEffect(()=>{
        (async () => {
            try {
                const url = 'http://localhost:5000/product/show-category'; // Thay đổi URL thành URL thực tế bạn muốn gọi
                const categories = await fetchData(url);
                setCategoryData(categories);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();

        (async () => {
            try {
                const url = 'http://localhost:5000/product/show-brand'; // Thay đổi URL thành URL thực tế bạn muốn gọi
                const brands = await fetchData(url);
                setBrandData(brands);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    },[]);
    

    return (
        <div className={cx('wrapper')}>
            <form className={`row ${cx('filter-form')}`} method='POST'>
                <div className={`col-4 ${cx('filter-item')}`}>
                    <label className={cx('label-select')} htmlFor='category-filter'>Thể loại</label>
                    <select  id='category-filter' className={`form-select ${cx('filter-select')}`} aria-label="Thể loại">
                        <option defaultValue={""}>Chọn thể loại</option>
                        {categoryData.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className={`col-4 ${cx('filter-item')}`}>
                    <label className={cx('label-select')} htmlFor='brand-filter'>Thương hiệu</label>
                    <select  id='brand-filter' className={`form-select ${cx('filter-select')}`} aria-label="Thể loại">
                        <option className={cx('select-option')} defaultValue={""}>Chọn thương hiệu</option>
                        {brandData.map((brand, index) => (
                            <option className={cx('select-option')} key={index} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>

                <div className={`col-4 ${cx('filter-item')}`}>
                    <button type='submit' className= {`btn btn-primary btn-lg ${cx('filter-submit-btn')}`}>Lọc</button>
                </div>
                
            </form>
        </div>
    );
}

export default FilterContainer;
