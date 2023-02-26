import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const BruceLeeHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='/bruce-lee' onClick={props.closeNavbar}>BruceLee</NavLink></li>

        </ul>
    </div>
}

const BruceLee = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>BruceLee</button>
        {show ? <BruceLeeHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default BruceLee