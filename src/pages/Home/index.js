import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Slider from '~/components/Layout/components/Slider';
import Category from '~/components/Layout/components/Category';
import Banner from '~/components/Layout/components/Banner';
import ProductContainer from '~/components/ProductContainer';

const cx = classNames.bind(styles);

const newProducts = [
    {
        category: 'ĐỒ CHƠI NGOÀI TRỜI',
        id: 'OD001',
        name: 'Bộ lưới và bóng bóng rổ Nerf Sports Nerfoop',
        price: 250000,
        brand: 'Nerf Sports Nerfoop',
        imageUrl: ['OD001_thumb.jpg', 'OD001b.jpg', 'OD001c.jpg'],
        description:
            'Với một chiếc vòng có bảng phía sau, Nerfoop cho phép mọi người trải nghiệm niềm vui khi sử dụng. Vòng dễ dàng treo trên cửa để bạn có thể chơi trò chơi ở hầu hết mọi nơi và đi kèm với một quả bóng xốp 10cm dễ cầm, ném và bắt.\nVòng có một tấm ván sau với lưới và móc để dễ dàng lắp đặt trong nhà và ngoài trời. Thiết lập nó để bắn một số vòng! Có cả kiểu dáng màu xanh lam và xanh lá cây để phù hợp với mọi người!\n- Sản phẩm bao gồm: 1 bộ lưới bóng rổ Nerf Nerfoop, 1 quả bóng xốp 10cm, giá đỡ, kẹp kim loại, giá đỡ cửa và hướng dẫn sử dụng.\n- Màu sắc: xanh dương, xanh lá cây\n- Có thể sử dụng cả trong nhà và ngoài trời.\n- Phù hợp cho trẻ em trên 4 tuổi.',
        star: 2.2,
        stock: 8722,
        time: '2024-01-06T12:59:03.742303',
    },
    {
        category: 'ĐỒ CHƠI NGOÀI TRỜI',
        id: 'OD002',
        name: 'Thú nhún trẻ em bơm hơi hình kỳ lân',
        price: 600000,
        brand: 'ADOO ELC',
        imageUrl: ['OD002_thumb.jpg', 'OD002b.jpg', 'OD002c.jpg'],
        description:
            'Hãy giữ lấy đôi tai mập mạp của kỳ lân và phi nước đại xung quanh. Trẻ có thể nhảy quanh phòng hoặc nhảy ra ngoài. Các con có thể sáng tạo ra những cuộc phiêu lưu thú vị khi chúng ta thích nhảy nhót xung quanh và giả vờ bay một cách kỳ diệu.\nĐây là một trò chơi giàu trí tưởng tượng và năng động, thú nhún bơm hơi ngọt ngào quyến rũ này rất phù hợp để khuyến khích con bạn di chuyển và giữ thăng bằng.\n- Sản phẩm bao gồm: 1 thú nhún hình kỳ lân.\n- Màu sắc: hồng.\n- Tay cầm được thiết kế dưới dạng tai để hỗ trợ trẻ dễ cầm nắm.\n- Dễ dàng bơm phồng và xả hơi để thuận tiện cho vận chuyển và cất giữ.\n- Phù hợp cho trẻ từ 1 tuổi trở lên.',
        star: 0.4,
        stock: 9333,
        time: '2024-01-06T12:59:03.742303',
    },
    {
        category: 'ĐỒ CHƠI NGOÀI TRỜI',
        id: 'OD003',
        name: 'Thú nhún trẻ em bơm hơi hình tê giác',
        price: 600000,
        brand: 'ADOO ELC',
        imageUrl: ['OD003_thumb.jpg', 'OD003b.jpg', 'OD003c.jpg'],
        description:
            'Hãy giữ lấy đôi tai mập mạp của tê giác và phi nước đại xung quanh. Trẻ có thể nhảy quanh phòng hoặc nhảy ra ngoài. Các con có thể sáng tạo ra những cuộc phiêu lưu thú vị khi chúng ta thích nhảy nhót xung quanh và giả vờ bay một cách kỳ diệu.\nĐây là một trò chơi giàu trí tưởng tượng và năng động, thú nhún bơm hơi ngọt ngào quyến rũ này rất phù hợp để khuyến khích con bạn di chuyển và giữ thăng bằng.\n- Sản phẩm bao gồm: 1 thú nhún hình tê giác.\n- Màu sắc: xanh lá cây.\n- Tay cầm được thiết kế dưới dạng tai để hỗ trợ trẻ dễ cầm nắm.\n- Dễ dàng bơm phồng và xả hơi để thuận tiện cho vận chuyển và cất giữ.\n- Phù hợp cho trẻ từ 1 tuổi trở lên.',
        star: 3.6,
        stock: 404,
        time: '2024-01-06T12:59:03.742303',
    },
    {
        category: 'ĐỒ CHƠI NGOÀI TRỜI',
        id: '0D004',
        name: 'Bộ đồ chơi ném vòng đủ màu',
        price: 80000,
        brand: 'ADOO PLAY',
        imageUrl: ['OD004_thumb.jpg', 'OD004b.jpg', 'OD004c.jpg'],
        description:
            'Trò chơi ném vòng rất phù hợp cho những ngày nắng đẹp ở trong vườn, là một trò chơi tuyệt vời dành cho các bé.\nBộ sản phẩm bao gồm đế nhựa chắc chắn và nhiều vòng nhiều màu sắc. Dễ dàng lắp đặt và là sự lựa chọn hoàn hảo cho thời gian vui chơi vui vẻ. Tất cả những gì còn lại phải làm là kiểm tra kỹ năng ném và nhắm của bạn để giành chiến thắng!\n- Sản phẩm bao gồm: 2 chân đế, 5 ghim, 5 vòng\n- Màu sắc: nhiều màu.\n- Giúp phát triển sự phối hợp tay và mắt.\n- Phù hợp cho trẻ từ 3 tuổi trở lên.',
        star: 4.3,
        stock: 9736,
        time: '2024-01-06T12:59:03.742303',
    },
];

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <Category />

            <div className={cx('container')}>
                <Banner className={cx('banner')} title="Sản phẩm mới" />
                <ProductContainer data={newProducts} />
                <Banner className={cx('banner')} title="Khuyến mãi" />
                <ProductContainer title="Khuyến mãi" data={newProducts} />
            </div>
        </div>
    );
}

export default Home;
