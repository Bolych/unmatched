import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const MarvelForKingAndCountryHeroes = () => {
    return <div>

        <ul>
            <li><NavLink to='black-panther'>Black Panther</NavLink></li>
            <li><NavLink to='black-widow'>Black Widow</NavLink></li>
            <li><NavLink to='winter-soldier'>Spike</NavLink></li>
        </ul>
    </div>
}

const MarvelForKingAndCountry = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Marvel's For King And Country</button>
        {show ? <MarvelForKingAndCountryHeroes/> : null}

    </div>)
}

export default MarvelForKingAndCountry