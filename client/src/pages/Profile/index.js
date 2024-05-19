import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

import { ENV } from '~/env';
const cx = classNames.bind(styles);

function Profile() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`${ENV.SERVER_URL}/profile/${id}`)
            .then((res) => res.json())
            .then((user) => {
                setUser(user);
            });
    }, []);
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
                    </div>

                    <div className={cx('info-img')}>
                        <img className={cx('img')} src={user.avatarUrl} alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
