import { useState } from "react";
import classNames from "classnames/bind";

import styles from './Otp.module.scss';

const cx = classNames.bind(styles)

function GenerateOTP({ setOtpParen }) {
    const [orgOtp, setOrgOtp] = useState('')

    const handleClickBtn = () => {
        const number = Math.floor(100000 + Math.random() * 900000)
        setOrgOtp(number)
        setOtpParen(number)
    }

    return (
        <div className={cx('container-generate')}>
            <button className={cx('btn-generate')} onClick={handleClickBtn}>Click OTP</button>
            <div className={cx('otp-generate')}>OTP: {orgOtp}</div>
        </div>
    );
}

export default GenerateOTP;