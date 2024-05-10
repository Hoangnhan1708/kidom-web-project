import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './CategoryItem.module.scss';

const cx = classNames.bind(styles);
function CategoryItem({ route, srcImg, title }) {
    return (
        <div className={`col-2 ${cx('category-col')}`}>
            <Link to={route} className={cx('category-item')}>
                <img className={cx('category-img')} src={srcImg} alt="Búp bê gấu bông" />
                <span>{title}</span>
            </Link>
        </div>
    );
}

export default CategoryItem;
