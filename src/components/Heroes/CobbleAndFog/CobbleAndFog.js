import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const CobbleAndFogHeroes = () => {
    return <div>
        <ul>
            <li><NavLink to='dracula'>Dracula</NavLink></li>
            <li><NavLink to='invisible'>Ivisible</NavLink></li>
            <li><NavLink to='sherlock'>Sherlock</NavLink></li>
            <li><NavLink to='jackile'>Jackile and Hide</NavLink></li>
        </ul>
    </div>
}

const CobbleAndFog = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Cobble And Fog</button>
        {show ? <CobbleAndFogHeroes/> : null}

    </div>)
}

export default CobbleAndFog