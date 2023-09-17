import OTPInput from "react-otp-input";
import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Otp.module.scss";
import CountDowm from "~/components/CountDowm";

const cx = classNames.bind(styles);

function InputOtp({ setUserOtp, handleOtp, isDis, setIsDis, optParen }) {
    const [otp, setOtp] = useState("");
    const [isCountDown, setIsCountDown] = useState(false)

    const handleChange = (otp) => {
        setOtp(otp);
        setUserOtp(otp)
    };

    const handleClear = () => {
        setOtp('')
    }
    return (
        <div className={cx('container-input')}>
            <div className={cx('count-down')}>
                <CountDowm setIsDis={setIsDis} isCountDown={isCountDown} />
            </div>
            <OTPInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                inputStyle={cx("input")}
                renderInput={(props) => <input {...props} />}
            />

            <div className={cx('btn')}>
                <button className={cx('btn-clear')} onClick={handleClear}>Clear</button>
                <button className={cx('btn-check')} onClick={() => {
                    handleOtp();
                    setOtp('');
                    if (optParen && otp && optParen === +otp) {
                        setIsCountDown(true)
                    }
                }} disabled={isDis}>Get OTP</button>
            </div>
        </div>
    );
}

export default InputOtp;
