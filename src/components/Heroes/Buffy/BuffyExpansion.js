import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const BuffyHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='buffy' onClick={props.closeNavbar}>Buffy</NavLink></li>
            <li><NavLink to='angel' onClick={props.closeNavbar}>Angel</NavLink></li>
            <li><NavLink to='spike' onClick={props.closeNavbar}>Spike</NavLink></li>
            <li><NavLink to='willow' onClick={props.closeNavbar}>Willow</NavLink></li>
        </ul>
    </div>
}

const BuffyExpansion = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Buffy</button>
        {show ? <BuffyHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default BuffyExpansion