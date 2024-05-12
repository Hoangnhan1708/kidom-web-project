import classNames from 'classnames/bind';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styles from './Slider.module.scss';
import { ENV } from '~/env';
const cx = classNames.bind(styles);


function Slider({type,imgs}) {
    return (
        <div className={cx('wrapper')}>
            <Slide>
                
                {imgs.map((img, index) => {
                    console.log(`${ENV.BASE_URL}/img/${type}/${img}`);
                    return (<div key={index}>
                        <img className={cx('slide-img')} src={`${ENV.BASE_URL}/img/${type}/${img}`} alt="slide" />
                    </div>)
                })}
            </Slide>
        </div>
    );
}

export default Slider;
