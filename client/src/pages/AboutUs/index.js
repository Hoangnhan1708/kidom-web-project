import classNames from 'classnames/bind';

import { ENV } from '~/env';
import styles from './AboutUs.module.scss';
const cx = classNames.bind(styles);

function AboutUs() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1 className={cx('heading')}>Về Kidom</h1>
                <div className={`row ${cx('content')}`}>
                    <div className={`col-2 ${cx('img-container')}`}>
                        <img className={cx('img')} src={`${ENV.BASE_URL}/img/aboutus/Gary.png`} alt="Gary" />
                    </div>
                    <div className={`col-10 ${cx('paragraph-container')}`}>
                        <p className={cx('paragraph')}>
                            Chào mừng bạn đến với Kidom - Nơi Đồ chơi độc đáo và Tận hưởng Kỳ diệu Thơ ấu! <br /> <br />
                            Kidom không chỉ là một trang web bán đồ chơi, mà là tinh thần và sự sáng tạo của năm người
                            bạn học sáng lập, chủ động từ đam mê và kí ức về thời thơ ấu. Hãy để chúng tôi kể một câu
                            chuyện thú vị về nguồn cảm hứng và sứ mệnh của chúng tôi. <br /> <br />
                            Nguyên tác của Kidom xuất phát từ Gary Grant, người đã phát hiện ra niềm đam mê của mình
                            trong việc mua bán đồ chơi và giải trí từ những năm 1970. Tính tài năng và sáng tạo của Gary
                            đã được chúng tôi kế thừa và phát triển, giúp tạo ra một không gian mua sắm trực tuyến độc
                            đáo và phong cách.
                            <br /> <br />
                        </p>
                        <div className="row">
                            <div className="col-8">
                                <p className={cx('paragraph')}>
                                    Năm 5 người bạn học của chúng tôi, như những người sáng lập Kidom, có chung niềm đam
                                    mê với trẻ em và việc tạo ra những kí ức đáng nhớ cho họ. Chúng tôi tin rằng mỗi đứa
                                    trẻ đều xứng đáng có một tuổi thơ tràn đầy kỳ diệu, và Kidom là nơi mà chúng tôi
                                    thực hiện sứ mệnh này.
                                    <br /> <br />
                                    Tại Kidom, chúng tôi không chỉ cung cấp những sản phẩm đồ chơi chất lượng cao mà còn
                                    xây dựng một cộng đồng yêu thích trẻ em và niềm vui gia đình. Chúng tôi đánh giá sự
                                    sáng tạo, vui chơi và trải nghiệm thú vị. Duyệt qua cửa hàng của chúng tôi để khám
                                    phá những điều tuyệt vời nhất mà Kidom mang đến cho bạn và những người thân yêu của
                                    bạn.
                                    <br /> <br />
                                    Hãy đồng hành cùng chúng tôi trên hành trình tạo ra những kí ức thơ ấu đáng nhớ và
                                    làm cho mỗi đứa trẻ có một tuổi thơ tràn đầy kỳ diệu tại Kidom!
                                    <br /> <br />
                                </p>
                            </div>
                            <div className="col-4">
                                <img
                                    className={cx('img-shop')}
                                    src={`${ENV.BASE_URL}/img/aboutus/shop.jpg`}
                                    alt="shop"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
