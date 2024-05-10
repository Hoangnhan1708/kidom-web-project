import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '~/assets/img';
import config from '~/config';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div class="row">
                <div class={`col-3}`}></div>
                <div class="col-3">2 of 4</div>
                <div class="col-3">3 of 4</div>
                <div class="col-3">4 of 4</div>
            </div>
        </footer>
    );
}

export default Footer;
