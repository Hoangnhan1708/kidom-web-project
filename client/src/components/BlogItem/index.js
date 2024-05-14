import classNames from 'classnames/bind';
import styles from './BlogItem.module.scss';

const cx = classNames.bind(styles);
function BlogItem({ img, title }) {
    return (
        <div className={cx('wrapper')}>
            <img alt="" />
            <span className={cx('info')}>{}</span>
        </div>
    );
}

export default BlogItem;
