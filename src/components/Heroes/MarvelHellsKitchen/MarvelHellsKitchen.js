import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const MarvelHellsKitchenHeroes = () => {
    return <div>

        <ul>
            <li><NavLink to='bullseye'>Bull's Eye</NavLink></li>
            <li><NavLink to='daredevil'>Daredevil</NavLink></li>
            <li><NavLink to='elektra'>Elektra</NavLink></li>

        </ul>
    </div>
}

const MarvelHellsKitchen = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Marvel's Hell's Kitchen</button>
        {show ? <MarvelHellsKitchenHeroes/> : null}

    </div>)
}

export default MarvelHellsKitchen