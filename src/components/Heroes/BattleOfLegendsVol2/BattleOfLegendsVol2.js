import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const BattleOfLegendsVol2Heroes = () => {
    return <div>

        <ul>
            <li><NavLink to='achilles'>Achilles</NavLink></li>
            <li><NavLink to='bloody-mary'>Bloody Mary</NavLink></li>
            <li><NavLink to='sun-wukong'>Sun Wukong</NavLink></li>
            <li><NavLink to='yennenga'>Yennenga</NavLink></li>
        </ul>
    </div>
}

const BattleOfLegendsVol2 = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Battle of Legends vol.2</button>
        {show ? <BattleOfLegendsVol2Heroes/> : null}

    </div>)
}

export default BattleOfLegendsVol2