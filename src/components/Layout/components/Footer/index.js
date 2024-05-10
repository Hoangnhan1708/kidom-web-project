import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import images from '~/assets/img';
import config from '~/config';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={`row ${cx('inner')}`}>
                <div className={`col-3 ${cx('footer-col')} `}>
                    <Link to={config.routes.home} className={cx('link-item')}>
                        <img src={images.logo} alt="Kidom" className={cx('logo-img')} />
                    </Link>
                    <Link to={config.routes.aboutus} className={cx('link-item')}>
                        <span>Về Kidom</span>
                    </Link>
                    <Link to="https://web.facebook.com/suachuasaydalatella" target="_blank" className={cx('link-item')}>
                        <span>Liên hệ</span>
                    </Link>
                    <Link to={config.routes.blog} className={cx('link-item')}>
                        <span>Blog</span>
                    </Link>
                </div>
                <div className={`col-3 ${cx('footer-col')} `}>
                    <h3 className={cx('heading')}>Hỗ trợ & chính sách</h3>
                    <Link to={config.routes.faq} className={cx('link-item')}>
                        <span>Các câu hỏi thường gặp</span>
                    </Link>
                    <Link to={config.routes.policy} className={cx('link-item')}>
                        <span>Chính sách bảo mật</span>
                    </Link>
                    <Link to={config.routes.policy} className={cx('link-item')}>
                        <span>Chính sách thanh toán</span>
                    </Link>
                    <Link to={config.routes.policy} className={cx('link-item')}>
                        <span>Chính sách khuyến mãi</span>
                    </Link>
                    <Link to={config.routes.policy} className={cx('link-item')}>
                        <span>Chính sách bảo hành và đổi trả</span>
                    </Link>
                </div>
                <div className={`col-3 g-3 ${cx('footer-col')}`}>
                    <form className={cx('form-receive-info')}>
                        <label htmlFor="receive-info" className={cx('form-receive-info-label')}>
                            Đăng ký nhận thông tin
                        </label>
                        <input
                            type="text"
                            readOnly
                            className={cx('form-receive-info-input')}
                            id="receive-info"
                            placeholder="email@example.com"
                        />
                        <div className={cx('form-receive-info-checkbox-container')}>
                            <input type="checkbox" className={cx('form-receive-info-checkbox')} />
                            <label htmlFor="receive-info" className={cx('form-receive-info-checkbox-label')}>
                                Tôi đồng ý nhận những thông báo về thông tin sản phẩm mới và khuyến mãi của Kidom
                            </label>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary btn-lg btn-danger ${cx('form-receive-info-submit')}`}
                        >
                            Gửi
                        </button>
                    </form>
                </div>
                <div className={`col-3 ${cx('footer-col')} `}>
                    <h3 className={cx('heading')}>Theo dõi Kidom tại</h3>
                    <div className={cx('img-container')}>
                        <Link
                            to="https://www.facebook.com/suachuasaydalatella?_rdc=1&_rdr"
                            target="_blank"
                            className={cx('link-item')}
                        >
                            <img
                                src={images.facebookLogo}
                                target="_blank"
                                alt="Kidom"
                                className={cx('logo-social-img')}
                            />
                        </Link>
                        <Link
                            to="https://www.tiktok.com/@suachuasaylanhdalatella?_t=8ioBF2yFX0x&_r=1"
                            target="_blank"
                            className={cx('link-item')}
                        >
                            <img
                                src={images.tiktokLogo}
                                target="_blank"
                                alt="Kidom"
                                className={cx('logo-social-img')}
                            />
                        </Link>
                        <Link
                            to="https://www.facebook.com/suachuasaydalatella?_rdc=1&_rdr"
                            target="_blank"
                            className={cx('link-item')}
                        >
                            <img
                                src={images.instagramLogo}
                                target="_blank"
                                alt="Kidom"
                                className={cx('logo-social-img')}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`${cx('copyright-box')}`}>
                <span>© 2023 Copyright: Kidom.com</span>
            </div>
        </footer>
    );
}

export default Footer;
