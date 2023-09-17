import classNames from "classnames/bind";
import styles from "./Products.modle.scss";
import icon from '~/components/Img/checkIcon.png';
import {
    IconStar,
    arrPurple,
    arrBlack,
    arrSilver,
    arrYellow,
    imgSilver,
    imgBlack,
    imgPurple,
    imgYellow
} from '~/components/Img';
import { useState } from "react";

const cx = classNames.bind(styles);

function Products() {
    const [current, setCurrent] = useState(imgSilver);
    const [currentChildren, setCurrentChildren] = useState(imgSilver)
    const [indexActive, setIndexActive] = useState(0)
    const [imgChildren, setImgChildren] = useState(arrSilver)
    const [title, setTitle] = useState("Bạc");
    const [ram, setRam] = useState("128GB");
    const [price, setPrice] = useState('26.250.000')
    const [payment, setPayment] = useState(parseFloat(26.250))
    const [number, setNumber] = useState(1)
    console.log(typeof (number))
    return (
        <div className={cx("container")}>
            <div className={cx("content")}>
                <div className={cx("content-left")}>
                    <div className={cx("img")}>
                        <img src={currentChildren} alt="img" />
                    </div>
                    <div className={cx("img-list")}>
                        {imgChildren && imgChildren.length > 0 && imgChildren.map((item, index) => (
                            <div key={index} className={cx("item", (indexActive === index || item === currentChildren ? 'active-item' : ''))} onClick={() => {
                                setCurrentChildren(item)
                                setIndexActive(index)
                            }}>
                                <img src={item} alt="imgSilver" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx("content-center")}>
                    <div className={cx("product-information")}>
                        <div className={cx("trademark")}>
                            <div className={cx("title")}>
                                <img src={icon} alt="check" />
                            </div>
                            <div className={cx("apple")}>
                                <span>
                                    Thương hiệu:{" "}
                                    <a href="https://tiki.vn/thuong-hieu/apple.html">Apple</a>
                                </span>
                            </div>
                        </div>
                        <div className={cx("title")}>Apple iPhone 14 Pro Max</div>
                        <div className={cx("star")}>
                            <div className={cx("star-number")}>
                                <span>5.0</span>
                                <span className={cx("icon")}>
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                    <IconStar />
                                </span>
                                <span className={cx("number")}>(510)</span>
                            </div>
                            <div className={cx("star-sold")}>
                                <span>Đã bán 3047</span>
                            </div>
                        </div>
                        <div className={cx("price")}>
                            {price} <span>₫</span>
                        </div>
                        <div className={cx("text")}>Màu</div>
                        <div className={cx("phone")}>
                            <div
                                className={cx("phone-item", (current === imgSilver ? 'active-border' : ''))}
                                onClick={() => {
                                    setCurrent(imgSilver);
                                    setTitle("Bạc");
                                    setImgChildren(arrSilver)
                                    setCurrentChildren(() => (
                                        arrSilver && arrSilver.length > 0 && (
                                            arrSilver.filter((item, index) => (
                                                (indexActive === index && item)
                                            ))
                                        )
                                    ))
                                }}
                            >
                                <img src={imgSilver} alt={title} />
                                <span>Bạc</span>
                            </div>
                            <div
                                className={cx("phone-item", (current === imgPurple ? 'active-border' : ''))}
                                onClick={() => {
                                    setCurrent(imgPurple);
                                    setTitle("Tím");
                                    setImgChildren(arrPurple);
                                    setCurrentChildren(() => (
                                        arrPurple && arrPurple.length > 0 && (
                                            arrPurple.filter((item, index) => (
                                                (indexActive === index && item)
                                            ))
                                        )
                                    ))

                                }}
                            >
                                <img src={imgPurple} alt={title} />
                                <span>Tím</span>
                            </div>
                            <div
                                className={cx("phone-item", (current === imgYellow ? 'active-border' : ''))}
                                onClick={() => {
                                    setCurrent(imgYellow);
                                    setTitle("Vàng");
                                    setImgChildren(arrYellow);
                                    setCurrentChildren(() => (
                                        arrYellow && arrYellow.length > 0 && (
                                            arrYellow.filter((item, index) => (
                                                (indexActive === index && item)
                                            ))
                                        )
                                    ))
                                }}
                            >
                                <img src={imgYellow} alt={title} />
                                <span>Vàng</span>
                            </div>
                            <div
                                className={cx("phone-item", (current === imgBlack ? 'active-border' : ''))}
                                onClick={() => {
                                    setCurrent(imgBlack);
                                    setTitle("Đen");
                                    setImgChildren(arrBlack)
                                    setCurrentChildren(() => (
                                        arrBlack && arrBlack.length > 0 && (
                                            arrBlack.filter((item, index) => (
                                                (indexActive === index && item)
                                            ))
                                        )
                                    ))
                                }}
                            >
                                <img src={imgBlack} alt={title} />
                                <span>Đen</span>
                            </div>
                        </div>
                        <div className={cx("capacity")}>
                            <div className={cx("title")}>Dung Lượng</div>
                            <div className={cx("ram")}>
                                <span
                                    className={cx(ram === '128GB' ? 'active-border' : '')}
                                    onClick={() => {
                                        setRam("128GB");
                                        setPrice('26.250.000')
                                        setPayment(parseFloat(26.250) * number)

                                    }}
                                >
                                    128GB
                                </span>
                                <span
                                    className={cx(ram === '256GB' ? 'active-border' : '')}
                                    onClick={() => {
                                        setRam("256GB");
                                        setPrice('28.990.000')
                                        setPayment(parseFloat(28.990) * number)
                                    }}
                                >
                                    256GB
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("contnet-price")}>
                <div className={cx("action")}>
                    <div className={cx("title")}>
                        <img src={current} alt="imgSilver" />
                        <span>
                            {title}, {ram}
                        </span>
                    </div>
                    <div className={cx("text")}>Số Lượng</div>
                    <div className={cx("input")}>
                        <button className={cx("btn-subtrac", (number > 1 ? 'active-sub' : ''))} onClick={() => {
                            if (number <= 1) {
                                return
                            }
                            setNumber(number - 1)
                            setPayment(payment - parseFloat(price))
                        }

                        }>-</button>
                        <div className={cx('number-payment')}>
                            {number}
                        </div>

                        <button className={cx("btn-add")} onClick={() => {
                            setNumber(number + 1)
                            setPayment(payment + parseFloat(price))
                        }}
                        >+</button>
                    </div>
                    <div className={cx("text")}>Tạm Tính</div>
                    <div className={cx("price-number")}>
                        <p> {payment.toFixed(3)}.000</p><span>₫</span>
                    </div>
                    <button className={cx("shopping")}>Mua Ngay</button>
                    <button className={cx("add-phone")}>Thêm Vào Giỏ Hàng</button>
                </div>
            </div>
        </div >
    );
}

export default Products;
