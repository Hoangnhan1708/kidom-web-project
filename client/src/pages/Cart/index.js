import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import CartItem from '~/components/CartItem';
import styles from './Cart.module.scss';
import { ENV } from '~/env';
const cx = classNames.bind(styles);

function Cart({ user }) {
    const [items, setItems] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const [checkedItemsCount, setCheckedItemsCount] = useState(0);
    const [isAllChecked, setIsAllChecked] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/login/auth/me`, { credentials: 'include' })
            .then((res) => res.json())
            .then((me) => {
                const userId = me.id;

                fetch(`${ENV.SERVER_URL}/cart/show?userId=${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                })
                    .then((res) => res.json())
                    .then((data) => setItems(data.map((item) => ({ ...item, checked: false }))));
            });
    }, []);

    useEffect(() => {
        const total = items.filter((item) => item.checked).reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalMoney(total);
        setCheckedItemsCount(items.filter((item) => item.checked).length);
    }, [items]);

    const handleCheckAll = () => {
        const newCheckedState = !isAllChecked;
        setIsAllChecked(newCheckedState);
        setItems(items.map((item) => ({ ...item, checked: newCheckedState })));
    };

    const handleItemCheck = (productId, checked) => {
        setItems(items.map((item) => (item.productId === productId ? { ...item, checked } : item)));
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('heading')}>Giỏ hàng của bạn</h1>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div className={`row align-items-center`}>
                        <input
                            type="checkbox"
                            className={`col ${cx('checkbox')}`}
                            checked={isAllChecked}
                            onChange={handleCheckAll}
                        />
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Hình ảnh</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Sản phẩm</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Đơn giá</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Số lượng</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Số tiền</span>
                        </div>
                        <div className={`col ${cx('box')}`}>
                            <span className={`${cx('title')}`}>Xóa</span>
                        </div>
                    </div>
                </div>
                {items.length ? (
                    items.map((item) => {
                        return <CartItem key={item.productId} item={item} onCheck={handleItemCheck} />;
                    })
                ) : (
                    <div>Loading...</div>
                )}
                <div className={cx('payment-container')}>
                    <div className={cx('payment-voucher')}>
                        <FontAwesomeIcon className={cx('voucher-icon')} icon={faTicket} />
                        Kidom voucher
                    </div>
                    <div className={cx('payment-total')}>
                        <input
                            type="checkbox"
                            className={`${cx('checkbox')}`}
                            checked={isAllChecked}
                            onChange={handleCheckAll}
                        />
                        <label className={cx('payment-label')}>
                            Tổng thanh toán: ({checkedItemsCount} sản phẩm): ₫{totalMoney}
                        </label>
                        <button className={cx('payment-btn')}>Mua hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;

// import classNames from 'classnames/bind';

// import styles from './Cart.module.scss';
// import CartItem from '~/components/CartItem';
// import { ENV } from '~/env';
// import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTicket } from '@fortawesome/free-solid-svg-icons';
// const cx = classNames.bind(styles);

// function Cart({ user }) {
//     const [items, setItems] = useState([]);
//     const [totalMoney, setTotalMoney] = useState(0);
//     const [checkedItemsCount, setCheckedItemsCount] = useState(0);
//     const [isAllChecked, setIsAllChecked] = useState(false);

//     useEffect(() => {
//         fetch(`http://localhost:5000/login/auth/me`, { credentials: 'include' })
//             .then((res) => res.json())
//             .then((me) => {
//                 const userId = me.id;

//                 fetch(`${ENV.SERVER_URL}/cart/show?userId=${userId}`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     credentials: 'include', // If you need to include cookies in the request
//                 })
//                     .then((res) => res.json())
//                     .then((data) => setItems(data.map((item) => ({ ...item, checked: false }))));
//             });
//     }, []);

//     useEffect(() => {
//         const total = items.filter((item) => item.checked).reduce((sum, item) => sum + item.price * item.quantity, 0);
//         setTotalMoney(total);
//         setCheckedItemsCount(items.filter((item) => item.checked).length);
//     }, [items]);

//     const handleCheckAll = () => {
//         const newCheckedState = !isAllChecked;
//         setIsAllChecked(newCheckedState);
//         setItems(items.map((item) => ({ ...item, checked: newCheckedState })));
//     };

//     const handleItemCheck = (productId, checked) => {
//         setItems(items.map((item) => (item.productId === productId ? { ...item, checked } : item)));
//     };

//     return (
//         <div className={cx('wrapper')}>
//             <h1 className={cx('heading')}>Giỏ hàng của bạn</h1>
//             <div className={cx('inner')}>
//                 <div className={cx('header')}>
//                     <div className={`row align-items-center`}>
//                         <input
//                             type="checkbox"
//                             checked={isAllChecked}
//                             onChange={handleCheckAll}
//                             className={`col ${cx('checkbox', 'check-all')}`}
//                         />
//                         <div className={`col ${cx('box')}`}>
//                             <span className={`${cx('title')}`}>Hình ảnh</span>
//                         </div>
//                         <div className={`col ${cx('box')}`}>
//                             <span className={`${cx('title')}`}>Sản phẩm</span>
//                         </div>
//                         <div className={`col ${cx('box')}`}>
//                             <span className={`${cx('title')}`}>Đơn giá</span>
//                         </div>
//                         <div className={`col ${cx('box')}`}>
//                             <span className={`${cx('title')}`}>Số lượng</span>
//                         </div>
//                         <div className={`col ${cx('box')}`}>
//                             <span className={`${cx('title')}`}>Số tiền</span>
//                         </div>
//                         <div className={`col ${cx('box')}`}>
//                             <span className={`${cx('title')}`}>Xóa</span>
//                         </div>
//                     </div>
//                 </div>
//                 {items ? (
//                     items.map((item) => {
//                         return (
//                             <CartItem
//                                 productId={item.productId}
//                                 key={item.productId}
//                                 img={item.imageUrl}
//                                 price={item.price}
//                                 name={item.name}
//                                 oldQuantity={item.quantity}
//                                 onCheck={handleItemCheck}
//                             />
//                         );
//                     })
//                 ) : (
//                     <div>Loading</div>
//                 )}
//                 <div className={cx('payment-container')}>
//                     <div className={cx('payment-voucher')}>
//                         <FontAwesomeIcon icon={faTicket} />
//                         Kidom voucher
//                     </div>
//                     <div className={cx('payment-total')}>
//                         <input
//                             type="checkbox"
//                             checked={isAllChecked}
//                             onChange={handleCheckAll}
//                             className={`${cx('checkbox')}`}
//                         />
//                         <label>
//                             Tổng thanh toán: ({checkedItemsCount} sản phẩm): ₫{totalMoney}
//                         </label>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Cart;
