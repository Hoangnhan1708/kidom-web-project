import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);
function SearchItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('info')}>{data}</span>
        </div>
    );
}

export default SearchItem;
