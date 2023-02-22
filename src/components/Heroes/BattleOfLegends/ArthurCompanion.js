import {useNavigate} from "react-router";
import s from "../Heroes.module.css";
import React from "react";
// import s from '../Heroes.module.css'

const Merlin = (props) => {

    const myStyle = {
        backgroundColor: props.state.backgroundColor,
        height: '100%'
    };

    const navigate = useNavigate()
    function handleClick() {
        navigate(`/${props.state.heroLink}`);
    }

    return (
        <div style={myStyle}>
            <div className={s.header}>
                <h1>{props.state.companionName}</h1>
            </div>
            Page about companion
            <p>{props.state.companionName}</p>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}

export default Merlin