import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const MarvelRedemptionRowHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='ghost-rider' onClick={props.closeNavbar}>Ghost Rider</NavLink></li>
            <li><NavLink to='luke-cage' onClick={props.closeNavbar}>Luke Cage</NavLink></li>
            <li><NavLink to='moon-knight' onClick={props.closeNavbar}>Moon Knight</NavLink></li>
        </ul>
    </div>
}

const MarvelRedemptionRow = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Marvel's Redemption Row</button>
        {show ? <MarvelRedemptionRowHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default MarvelRedemptionRow