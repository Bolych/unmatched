import s from './Header.module.css'
import React from "react";

const Header = (props) => {
    return <header className='header'>
        <div className='hide-button' onClick={props.handleToggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </header>
}

export default Header