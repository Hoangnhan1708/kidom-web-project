import classNames from 'classnames/bind';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children, user, logout }) {
    return (
        <div className={cx('wrapper')}>
            <Header user={user} logout={logout}></Header>
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
