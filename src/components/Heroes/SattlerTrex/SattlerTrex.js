import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const SattlerTrexHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='sattler' onClick={props.closeNavbar}>Dr. Sattler</NavLink></li>
            <li><NavLink to='t-rex' onClick={props.closeNavbar}>T-rex</NavLink></li>
        </ul>
    </div>
}

const SattlerTrex = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Ingen vs Raptors</button>
        {show ? <SattlerTrexHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default SattlerTrex