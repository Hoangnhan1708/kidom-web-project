import React from 'react';
import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <h1>Profile</h1>
        </div>
    );
}

export default Profile;
