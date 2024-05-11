import classNames from 'classnames/bind';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './Slider.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

const slideImages = [
    {
        url: images.banner1,
        caption: 'Slide 1',
    },
    {
        url: images.banner2,
        caption: 'Slide 2',
    },
];
function Slider() {
    return (
        <div className={cx('wrapper')}>
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <img className={cx('slide-img')} src={slideImage.url} alt="slide" />
                    </div>
                ))}
            </Slide>
        </div>
    );
}

export default Slider;
