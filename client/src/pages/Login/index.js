import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import styles from './Login.module.scss';
import { ENV } from '~/env';
import config from '~/config';
const cx = classNames.bind(styles);

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${ENV.SERVER_URL}/login/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.message) {
                // Hiển thị thông báo lỗi từ phản hồi
                setErrorMessage(data.message);
            } else {
                // Xử lý chuyển hướng sau khi đăng nhập thành công
                window.location.href = 'http://localhost:3000';
            }
        } catch (error) {
            setErrorMessage('Có lỗi xảy ra, vui lòng thử lại sau.');
            console.error('Error:', error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-form-container')}>
                <h1 className={cx('heading')}>Đăng nhập với</h1>
                <div className={cx('social-media-box')}>
                    <button className={cx('social-media-btn', 'facebook-btn')}>
                        <FaFacebookSquare className={cx('facebook-img', 'social-media-img')} />
                        Facebook
                    </button>
                    <button className={cx('social-media-btn', 'google-btn')}>
                        <img
                            className={cx('google-img', 'social-media-img')}
                            src={`${ENV.BASE_URL}/img/logo/icon-google.png`}
                            alt="google"
                        />
                        Google
                    </button>
                </div>
                <form className={cx('login-form')} onSubmit={handleSubmit}>
                    <label className={cx('label')} htmlFor="username">
                        Tài khoản
                    </label>
                    <input
                        name="username"
                        className={cx('input')}
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className={cx('label')} htmlFor="password">
                        Mật khẩu
                    </label>
                    <input
                        name="password"
                        className={cx('input')}
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className={cx('submit-btn')} type="submit">
                        Đăng nhập
                    </button>
                </form>
                {errorMessage && <div className={cx('error-message')}>{errorMessage}</div>}
                <span className={cx('signup-span')}>
                    Bạn chưa là thành viên?{' '}
                    <Link className={cx('signup-link')} to={config.routes.SignUp}>
                        Đăng ký ngay
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Login;
// import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
// import { FaFacebookSquare } from 'react-icons/fa';
// import styles from './Login.module.scss';
// import { ENV } from '~/env';
// import config from '~/config';
// const cx = classNames.bind(styles);
// function Login() {
//     return (
//         <div className={cx('wrapper')}>
//             <div className={cx('login-form-container')}>
//                 <h1 className={cx('heading')}>Đăng nhập với</h1>
//                 <div className={cx('social-media-box')}>
//                     <button className={cx('social-media-btn', 'facebook-btn')}>
//                         <FaFacebookSquare className={cx('facebook-img', 'social-media-img')} />
//                         Facebook
//                     </button>
//                     <button className={cx('social-media-btn', 'google-btn')}>
//                         <img
//                             className={cx('google-img', 'social-media-img')}
//                             src={`${ENV.BASE_URL}/img/logo/icon-google.png`}
//                             alt="goggle"
//                         />
//                         Google
//                     </button>
//                 </div>
//                 <form className={cx('login-form')} method="POST" action={`${ENV.SERVER_URL}/login/verify`}>
//                     <label className={cx('label')} htmlFor="username">
//                         Tài khoản
//                     </label>
//                     <input name="username" className={cx('input')} id="username" type="text" />
//                     <label className={cx('label')} htmlFor="password">
//                         Mật khẩu
//                     </label>
//                     <input name="password" className={cx('input')} id="password" type="password" />
//                     <button className={cx('submit-btn')} type="submit">
//                         Đăng nhập
//                     </button>
//                 </form>
//                 <span className={cx('signup-span')}>
//                     Bạn chưa là thành viên?{' '}
//                     <Link className={cx('signup-link')} to={config.routes.SignUp}>
//                         Đăng ký ngay
//                     </Link>
//                 </span>
//             </div>
//         </div>
//     );
// }

// export default Login;
