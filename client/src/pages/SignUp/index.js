import classNames from 'classnames/bind';

import styles from './SignUp.module.scss';
import { ENV } from '~/env';
import routes from '~/config/routes';
import config from '~/config';
const cx = classNames.bind(styles);
function SignUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-form')}>
                <h1 className={cx('heading')}>Đăng nhập với</h1>
                <div className={cx('social-media-box')}>
                    <button className={cx('social-media-btn')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                className={cx('social-media-img')}
                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
                            />
                        </svg>
                        Facebook
                    </button>
                    <button className={cx('social-media-btn')}>
                        <img src={`${ENV.BASE_URL}/img/logo/icon-google.png`} alt="goggle" />
                        Facebook
                    </button>
                </div>
                <form className={cx('login-form')}>
                    <label className={cx('label')} htmlFor="username">
                        Tài khoản
                    </label>
                    <input className={cx('input')} id="username" type="text" />
                    <label className={cx('label')} htmlFor="password">
                        Mật khẩu
                    </label>
                    <input className={cx('input')} id="password" type="password" />
                    <button type="submit">Đăng nhập</button>
                </form>
                <span>Bạn chưa là thành viên? </span>
            </div>
        </div>
    );
}

export default SignUp;
