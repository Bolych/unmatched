import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const IngenRaptosHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='ingen' onClick={props.closeNavbar}>InGen</NavLink></li>
            <li><NavLink to='raptors' onClick={props.closeNavbar}>Raptors</NavLink></li>
            {/*<li><NavLink to='trex' onClick={props.closeNavbar}>T-rex</NavLink></li>*/}
            {/*<li><NavLink to='drsattler' onClick={props.closeNavbar}>Dr Sattler</NavLink></li>*/}
        </ul>
    </div>
}

const IngenRaptors = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Ingen vs Raptors</button>
        {show ? <IngenRaptosHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default IngenRaptors