import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const DeadpoolHeroes = () => {
    return <div>

        <ul>
            <li><NavLink to='deadpool'>Deadpool</NavLink></li>

        </ul>
    </div>
}

const Deadpool = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Deadpool</button>
        {show ? <DeadpoolHeroes/> : null}

    </div>)
}

export default Deadpool