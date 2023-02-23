import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const MarvelTeenSpiritHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='cloak-and-dagger' onClick={props.closeNavbar}>Cloak and Dagger</NavLink></li>
            <li><NavLink to='ms-marvel' onClick={props.closeNavbar}>Miss Marvel</NavLink></li>
            <li><NavLink to='squirrel-girl' onClick={props.closeNavbar}>Squirrel Girl</NavLink></li>
        </ul>
    </div>
}

const MarvelTeenSpirit = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Marvel's teen spirit</button>
        {show ? <MarvelTeenSpiritHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default MarvelTeenSpirit