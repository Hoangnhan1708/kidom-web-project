import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { ENV } from '~/env';
const cx = classNames.bind(styles);

function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        fetch(`${ENV.SERVER_URL}/profile/${id}`)
            .then((res) => res.json())
            .then((user) => {
                setUser(user);
            });
    }, []);

    const handleSubmitChange = async (event) => {
        event.preventDefault();
        setErrorMessage('');
        const id = user.id;
        try {
            fetch(`${ENV.SERVER_URL}/profile/edit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({ id, name, imageUrl }),
            })
                .then((res) => {
                    return res.json();
                })
                .then((message) => {
                    alert(message.message);
                    window.location.replace(`${ENV.BASE_URL}profile/${id}`);
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
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1 className={cx('heading')}>Hồ sơ của bạn</h1>

                <div className={cx('info-container')}>
                    <div className={cx('info-text')}>
                        <div className={cx('info-row')}>
                            <label className={cx('info-label')}>ID: </label>
                            {'   ' + user.id}
                        </div>
                        <div className={cx('info-row')}>
                            <label className={cx('info-label')}>Tên đăng nhập: </label>
                            {'   ' + user.username}
                        </div>
                        <div className={cx('info-row')}>
                            <label className={cx('info-label')}>Họ và tên: </label>
                            {'   ' + user.name}
                        </div>
                        <div className={cx('info-row')}>
                            <label className={cx('info-label')} htmlFor="name">
                                Tên
                            </label>
                            <input
                                name="name"
                                className={cx('input-change-name')}
                                id="change-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Thay đổi tên"
                            />
                        </div>
                    </div>

                    <div className={cx('info-img')}>
                        <img className={cx('img')} src={user.avatarUrl} alt="avatar" />
                        <input
                            className={cx('input-change-img')}
                            name="avatar"
                            id="change-avatar"
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="Link avatar của bạn"
                        ></input>
                    </div>
                </div>
                <button onClick={handleSubmitChange} className={cx('submit-change-btn')}>
                    Thay đổi
                </button>
            </div>
        </div>
    );
}

export default Profile;
