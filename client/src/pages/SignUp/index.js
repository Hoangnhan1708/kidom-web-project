import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import styles from './SignUp.module.scss';
import { ENV } from '~/env';
import config from '~/config';
const cx = classNames.bind(styles);

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        if (password === confirmPassword) {
            try {
                fetch(`${ENV.SERVER_URL}/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({ username, password }),
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((message) => {
                        alert(message.message);
                        window.location.replace(`${ENV.BASE_URL}login`);
                    })
                    .catch((error) => {
                        if (error.status === 400) {
                            return setErrorMessage('Tài khoản đã tồn tài!');
                        } else {
                            return setErrorMessage('Lỗi không xác định!');
                        }
                    });
            } catch (error) {
                setErrorMessage('Có lỗi xảy ra, vui lòng thử lại sau.');
                console.error('Error:', error);
            }
        } else {
            setErrorMessage('Vui lòng xác nhập mật khẩu chính xác!');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('signup-form-container')}>
                <h1 className={cx('heading')}>Đăng ký với</h1>
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
                <form className={cx('signup-form')} onSubmit={handleSubmit}>
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
                        required
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
                        required
                    />
                    <label className={cx('label')} htmlFor="password">
                        Xác nhận mật khẩu
                    </label>
                    <input
                        name="confirm-password"
                        className={cx('input')}
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button className={cx('submit-btn')} type="submit">
                        Đăng ký
                    </button>
                </form>
                {errorMessage && <div className={cx('error-message')}>{errorMessage}</div>}
                <span className={cx('signup-span')}>
                    Bạn đã có tài khoản?{' '}
                    <Link className={cx('signup-link')} to={config.routes.SignUp}>
                        Đăng nhập ngay
                    </Link>
                </span>
            </div>
        </div>
    );
}

export default SignUp;
