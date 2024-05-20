import React, { useEffect, useState } from 'react';
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
        setErrorMessage('');
        try {
            fetch(`${ENV.SERVER_URL}/login/auth`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({ username, password }),
            })
                .then((res) => {
                    if (res.ok) {
                        window.location.replace(`${ENV.BASE_URL}`);
                        return res.json();
                    }
                    throw res;
                })
                .then((user) => {
                    // console.log(user);
                })
                .catch((error) => {
                    if (error.status === 401) {
                        return setErrorMessage('Tài khoản hoặc mật khẩu không chính xác!');
                    } else {
                        return setErrorMessage('Lỗi không xác định!');
                    }
                });
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
                    <Link className={cx('signup-link')} to={config.routes.signup}>
                        Đăng ký ngay
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default Login;
