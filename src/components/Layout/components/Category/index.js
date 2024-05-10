import classNames from 'classnames/bind';

import config from '~/config';
import 'react-slideshow-image/dist/styles.css';
import styles from './Category.module.scss';
import images from '~/assets/img';
import CategoryItem from '~/components/CategoryItem';

const cx = classNames.bind(styles);

function Category() {
    return (
        <div className={cx('wrapper')}>
            <div className={`row ${cx('category-container')}`}>
                <CategoryItem
                    route={config.routes.product + '?category=BÚP%20BÊ%20-%20GẤU%20BÔNG'}
                    srcImg={images.bupbegaubong}
                    title={'Búp bê - Gấu bông'}
                />

                <CategoryItem
                    route={config.routes.product + '?category=ĐỒ%20CHƠI%20NGOÀI%20TRỜI'}
                    srcImg={images.dochoingoaitroi}
                    title={'Đồ chơi ngoài trời'}
                />
                <CategoryItem
                    route={config.routes.product + '?category=HOÁ%20TRANG'}
                    srcImg={images.Hoatrang}
                    title={'Hoá trang'}
                />
                <CategoryItem
                    route={config.routes.product + '?category=THỂ%20THAO'}
                    srcImg={images.thethao}
                    title={'Thể thao'}
                />
                <CategoryItem
                    route={config.routes.product + '?category=THỦ%20CÔNG%20-%20MỸ%20THUẬT'}
                    srcImg={images.thucongmythuat}
                    title={'Thủ công - Mỹ thuật'}
                />
                <CategoryItem
                    route={config.routes.product + '?category=TRÒ%20CHƠI%20TRÍ%20TUỆ'}
                    srcImg={images.trochoitritue}
                    title={'Trò chơi trí tuệ'}
                />
            </div>
        </div>
    );
}

export default Category;
