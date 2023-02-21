import s from './Header.module.css'
import React from "react";

const Header = (props) => {
    return <header className='header'>
        <div><button className='hide-button' onClick={props.handleToggleSidebar}>☰☰☰☰☰</button></div>

    </header>
}

export default Header