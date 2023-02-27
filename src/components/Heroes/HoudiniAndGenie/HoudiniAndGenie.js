import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const HoudiniAndGenieHeroes = (props) => {
    return <div>
        <ul>
            <li><NavLink to='houdini' onClick={props.closeNavbar}>Houdini</NavLink></li>
            <li><NavLink to='genie' onClick={props.closeNavbar}>The Genie</NavLink></li>

        </ul>
    </div>
}

const HoudiniAndGenie = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Houdini and the Genie</button>
        {show ? <HoudiniAndGenieHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}



export default HoudiniAndGenie