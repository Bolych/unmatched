
import React, {useState} from "react";

import {NavLink} from "react-router-dom";


const BattleOfLegendsHeroes = (props) => {
    return <div>
        <div>
            <NavLink to='arthur'>Arthur</NavLink>
        </div>
        <div>
            <NavLink to='alice'>Alice</NavLink>
        </div>
        <div>
            <NavLink to='medusa'>Medusa</NavLink>
        </div>
        <div>
            <NavLink to='sindbad'>Sindbad</NavLink>
        </div>

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