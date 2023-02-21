import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const HoudiniAndGenieHeroes = () => {
    return <div>

        <ul>
            <li><NavLink to='hoidini'>Houdini</NavLink></li>
            <li><NavLink to='genie'>The Genie</NavLink></li>

        </ul>
    </div>
}

const HoudiniAndGenie = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Houdini and the Genie</button>
        {show ? <HoudiniAndGenieHeroes/> : null}

    </div>)
}

export default HoudiniAndGenie