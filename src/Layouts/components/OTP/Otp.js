import GenerateOTP from "./GenerateOTP";
import InputOtp from "./InputOtp";
import classNames from "classnames/bind";

import styles from "./Otp.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Otp() {
    const [optParen, setOtpParen] = useState("");
    const [userOtp, setUserOtp] = useState("");
    const [isDis, setIsDis] = useState(false);

    const handleOtp = () => {
        if (!optParen || !userOtp) {
            alert('Bạn Phải Click OR Nhập OTP !')
        } else {
            if (optParen === +userOtp) {
                alert("Bạn Đã Nhập Đúng!");
                setIsDis(true)
            } else {
                alert("Bạn Đã Nhập Sai!");
            }
        }

    };
    return (
        <div className={cx("container")}>
            <GenerateOTP setOtpParen={setOtpParen} />
            <InputOtp
                setUserOtp={setUserOtp}
                handleOtp={handleOtp}
                isDis={isDis}
                optParen={optParen}
                setIsDis={setIsDis}
            />
        </div>
    );
}

export default Otp;
