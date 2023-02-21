import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const BuffyHeroes = () => {
    return <div>

        <ul>
            <li><NavLink to='angel'>Angel</NavLink></li>
            <li><NavLink to='buffy'>Buffy</NavLink></li>
            <li><NavLink to='spike'>Spike</NavLink></li>
            <li><NavLink to='willow'>Willow</NavLink></li>
        </ul>
    </div>
}

const Buffy = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Buffy</button>
        {show ? <BuffyHeroes/> : null}

    </div>)
}

export default Buffy