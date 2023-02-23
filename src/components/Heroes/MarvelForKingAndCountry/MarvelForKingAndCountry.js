import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const MarvelForKingAndCountryHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='black-panther' onClick={props.closeNavbar}>Black Panther</NavLink></li>
            <li><NavLink to='black-widow' onClick={props.closeNavbar}>Black Widow</NavLink></li>
            <li><NavLink to='winter-soldier' onClick={props.closeNavbar}>Winter Soldier</NavLink></li>
        </ul>
    </div>
}

const MarvelForKingAndCountry = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Marvel's For King And Country</button>
        {show ? <MarvelForKingAndCountryHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default MarvelForKingAndCountry