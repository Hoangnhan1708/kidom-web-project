import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Slider from '~/components/Layout/components/Slider';
import Category from '~/components/Layout/components/Category';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <Category />
        </div>
    );
}

export default Home;
