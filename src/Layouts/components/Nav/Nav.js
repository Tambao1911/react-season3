import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './Nav.module.scss'

const cx = classNames.bind(styles)

function Nav() {
    return (
        <div className={cx("topnav")}>
            <NavLink className={({ isActive }) => isActive ? cx("active") : ''} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? cx("active") : ''} to="/product">Product</NavLink>
            <NavLink className={({ isActive }) => isActive ? cx("active") : ''} to="/weather">Weather</NavLink>
            <NavLink className={({ isActive }) => isActive ? cx("active") : ''} to="/otp">GenerateOTP</NavLink>
            <NavLink className={({ isActive }) => isActive ? cx("active") : ''} to="/about">About</NavLink>
        </div>
    );
}

export default Nav;