import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const MarvelHellsKitchenHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='bullseye' onClick={props.closeNavbar}>Bull's Eye</NavLink></li>
            <li><NavLink to='daredevil' onClick={props.closeNavbar}>Daredevil</NavLink></li>
            <li><NavLink to='elektra' onClick={props.closeNavbar}>Elektra</NavLink></li>

        </ul>
    </div>
}

const MarvelHellsKitchen = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Marvel's Hell's Kitchen</button>
        {show ? <MarvelHellsKitchenHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default MarvelHellsKitchen