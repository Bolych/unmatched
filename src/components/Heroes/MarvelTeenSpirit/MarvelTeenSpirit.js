import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const MarvelTeenSpiritHeroes = () => {
    return <div>

        <ul>
            <li><NavLink to='cloak-and-dagger'>Cloak and Dagger</NavLink></li>
            <li><NavLink to='ms-marvel'>Miss Marvel</NavLink></li>
            <li><NavLink to='squirrel-girl'>Squirrel Girl</NavLink></li>
        </ul>
    </div>
}

const MarvelTeenSpirit = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Marvel's teen spirit</button>
        {show ? <MarvelTeenSpiritHeroes/> : null}

    </div>)
}

export default MarvelTeenSpirit