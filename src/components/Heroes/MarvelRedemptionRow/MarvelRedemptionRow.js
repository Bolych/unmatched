import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const MarvelRedemptionRowHeroes = () => {
    return <div>

        <ul>
            <li><NavLink to='ghost-rider'>Ghost Rider</NavLink></li>
            <li><NavLink to='luke-cage'>Luke Cage</NavLink></li>
            <li><NavLink to='moon-knight'>Moon Knight</NavLink></li>
        </ul>
    </div>
}

const MarvelRedemptionRow = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Marvel's Redemption Row</button>
        {show ? <MarvelRedemptionRowHeroes/> : null}

    </div>)
}

export default MarvelRedemptionRow