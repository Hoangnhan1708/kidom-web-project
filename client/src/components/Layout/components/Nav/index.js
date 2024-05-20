import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import config from '~/config';
import styles from './Nav.module.scss';
import images from '~/assets/img';
const cx = classNames.bind(styles);
function Nav() {
    return (
        <div className={cx('wrapper')}>
            <Link to={config.routes.home} className={cx('link-item')}>
                <img className={cx('link-img')} src={images.DesignByYouLogo} alt="Design by you" />
            </Link>
            <Link to={config.routes.home} className={cx('link-item')}>
                <span>Trang chủ</span>
            </Link>
            <Link to={config.routes.product} className={cx('link-item')}>
                <span>Sản phẩm</span>
            </Link>
            <Link to={config.routes.aboutus} className={cx('link-item')}>
                <span>Về Kidom</span>
            </Link>
            <Link to={config.routes.home} className={cx('link-item')}>
                <span>Blog</span>
            </Link>
        </div>
    );
}

export default Nav;
