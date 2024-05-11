import classNames from 'classnames/bind';

import styles from './Banner.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Banner({ title }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('title-img')} src={images.banner} alt="tieude" />
            <h1 className={cx('title-heading')}>{title}</h1>
        </div>
    );
}

export default Banner;
