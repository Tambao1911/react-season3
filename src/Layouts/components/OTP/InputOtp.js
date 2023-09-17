import OTPInput from "react-otp-input";
import { useState, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./Otp.module.scss";
import CountDowmAnimation from "~/components/CountDowm/CountDowmAnimation";

const cx = classNames.bind(styles);

function InputOtp({ setUserOtp, handleOtp, isDis, setIsDis, optParen }) {
    const [otp, setOtp] = useState("");
    const inputRef = useRef()

    const handleChange = (otp) => {
        setOtp(otp);
        setUserOtp(otp)
    };

    const handleClear = () => {
        inputRef.current.restTimer()
    }
    return (
        <div className={cx('container-input')}>
            <div className={cx('count-down')}>
                <CountDowmAnimation setIsDis={setIsDis} isDis={isDis} ref={inputRef} />
            </div>
            <OTPInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                inputStyle={cx("input")}
                renderInput={(props) => <input {...props} />}
            />

            <div className={cx('btn')}>
                <button className={cx('btn-clear')} onClick={handleClear} disabled={!isDis}>Clear</button>
                <button className={cx('btn-check')} onClick={() => {
                    handleOtp();
                    setOtp('');
                    if (optParen && otp && optParen === +otp) {
                        setIsDis(true)
                    }
                }} disabled={isDis}>Get OTP</button>
            </div>
        </div>
    );
}

export default InputOtp;
