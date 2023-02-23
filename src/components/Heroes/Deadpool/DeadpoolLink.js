import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const DeadpoolHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='deadpool' onClick={props.closeNavbar}>Deadpool</NavLink></li>

        </ul>
    </div>
}

const Deadpool = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Deadpool</button>
        {show ? <DeadpoolHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default Deadpool