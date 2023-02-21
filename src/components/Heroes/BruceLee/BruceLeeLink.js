import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const BruceLeeHeroes = () => {
    return <div>

        <ul>
            <li><NavLink to='bruce-lee'>BruceLee</NavLink></li>

        </ul>
    </div>
}

const BruceLee = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>BruceLee</button>
        {show ? <BruceLeeHeroes/> : null}

    </div>)
}

export default BruceLee