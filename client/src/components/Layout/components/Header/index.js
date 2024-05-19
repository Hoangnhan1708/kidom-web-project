import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import Nav from '../Nav';
import config from '~/config';
import images from '~/assets/img';
import Search from '../Search';
import { ENV } from '~/env';
const cx = classNames.bind(styles);

function Header({ user, logout }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('wrapper-header')}>
                <div className={cx('inner-header')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Kidom" className={cx('logo-img')} />
                    </Link>

                    <Search />

                    <div className={cx('btn-container')}>
                        <Link to={config.routes.cart} className={cx('cart-link')}>
                            <FontAwesomeIcon className={cx('cart-img')} icon={faCartShopping} />
                            <span>Giỏ hàng</span>
                        </Link>
                        {!!user ? (
                            <div className={cx('auth-container')}>
                                <Link to={`${ENV.BASE_URL}profile/${user.id}`} className={cx('profile-link')}>
                                    <img className={cx('avatar-img')} alt="avatar" src={user.avatarUrl} />
                                    <span className={cx('profile-name')}>{user.username}</span>
                                </Link>
                                <button onClick={logout} className={cx('logout-btn')}>
                                    Đăng xuất
                                </button>
                            </div>
                        ) : (
                            <Link to={config.routes.login} className={cx('login-link')}>
                                <FontAwesomeIcon className={cx('login-img')} icon={faCircleUser} />
                                <span>Đăng nhập/Đăng ký</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-nav')}>
                <div className={cx('inner-nav')}>
                    <Nav />
                </div>
            </div>
        </header>
    );
}

export default Header;
