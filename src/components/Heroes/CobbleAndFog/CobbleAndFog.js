
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const CobbleAndFogHeroes = () => {
    return <div>
        <div>
            <NavLink to='dracula'>Dracula</NavLink>
        </div>
        <div>
            <NavLink to='invisible'>Ivisible</NavLink>
        </div>
        <div>
            <NavLink to='sherlock'>Sherlock</NavLink>
        </div>
        <div>
            <NavLink to='jackile'>Jackile and Hide</NavLink>
        </div>
    </div>
}

const CobbleAndFog = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={()=> setShow(!show)}>Cobble And Fog</button>
        {show? <CobbleAndFogHeroes/> : null}

    </div>)
}

export default CobbleAndFog