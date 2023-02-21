import React, {useState} from "react";

import {NavLink} from "react-router-dom";


const BattleOfLegendsHeroes = (props) => {
    return <div>
        <ul>
            <li><NavLink to='arthur'>Arthur</NavLink></li>
            <li><NavLink to='alice'>Alice</NavLink></li>
            <li><NavLink to='medusa'>Medusa</NavLink></li>
            <li><NavLink to='sinbad'>Sinbad</NavLink></li>
        </ul>
    </div>
}

const BattleOfLegends = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Battle of legends</button>
        {show ? <BattleOfLegendsHeroes/> : null}

    </div>)
}

export default BattleOfLegends