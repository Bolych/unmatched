import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const BattleOfLegendsVol2Heroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='achilles' onClick={props.closeNavbar}>Achilles</NavLink></li>
            <li><NavLink to='bloody-mary' onClick={props.closeNavbar}>Bloody Mary</NavLink></li>
            <li><NavLink to='sun-wukong' onClick={props.closeNavbar}>Sun Wukong</NavLink></li>
            <li><NavLink to='yennenga' onClick={props.closeNavbar}>Yennenga</NavLink></li>
        </ul>
    </div>
}

const BattleOfLegendsVol2 = (props) => {
    const [show, setShow] = useState(false)
    const setShowHandler = () => {setShow(!show)

    }
    return (<div>
        <button onClick={setShowHandler}>Battle of Legends vol.2</button>
        {show ? <BattleOfLegendsVol2Heroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default BattleOfLegendsVol2