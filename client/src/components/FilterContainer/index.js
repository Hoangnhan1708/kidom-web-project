import classNames from 'classnames/bind';
import styles from './FilterContainer.module.scss';



const cx = classNames.bind(styles);
function FilterContainer() {
    return (
        <div className={cx('wrapper')}>
            <h1>FilterContainer</h1>
        </div>
    );
}

export default FilterContainer;
