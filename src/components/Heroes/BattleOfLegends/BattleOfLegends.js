import React, {useState} from "react";

import {NavLink} from "react-router-dom";


const BattleOfLegendsHeroes = (props) => {
    return <div>
        <ul>
            <li><NavLink to='arthur' onClick={props.closeNavbar}>Arthur</NavLink></li>
            <li><NavLink to='alice' onClick={props.closeNavbar}>Alice</NavLink></li>
            <li><NavLink to='medusa' onClick={props.closeNavbar}>Medusa</NavLink></li>
            <li><NavLink to='sinbad' onClick={props.closeNavbar}>Sinbad</NavLink></li>
        </ul>
    </div>
}

const BattleOfLegends = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Battle of legends</button>
        {show ? <BattleOfLegendsHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default BattleOfLegends