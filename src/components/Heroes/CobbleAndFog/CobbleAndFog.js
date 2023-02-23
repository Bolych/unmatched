import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const CobbleAndFogHeroes = (props) => {
    return <div>
        <ul>
            <li><NavLink to='dracula' onClick={props.closeNavbar}>Dracula</NavLink></li>
            <li><NavLink to='invisible' onClick={props.closeNavbar}>Ivisible</NavLink></li>
            <li><NavLink to='sherlock' onClick={props.closeNavbar}>Sherlock</NavLink></li>
            <li><NavLink to='jackile' onClick={props.closeNavbar}>Jackile and Hide</NavLink></li>
        </ul>
    </div>
}

const CobbleAndFog = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Cobble And Fog</button>
        {show ? <CobbleAndFogHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default CobbleAndFog