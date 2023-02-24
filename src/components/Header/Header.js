import s from './Header.module.css'
import React from "react";
import {useLocation, useNavigate} from "react-router";


const Header = (props) => {

    // const location = useLocation();
    // const navigate = useNavigate();
    // function handleGoBack() {
    //     if (location.state && location.state.from) {
    //         navigate(location.state.from);
    //     } else {
    //         navigate(-1);
    //     }}


    return <header className='header'>
        <div className={s.hideButton} onClick={props.handleToggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </header>
}

export default Header