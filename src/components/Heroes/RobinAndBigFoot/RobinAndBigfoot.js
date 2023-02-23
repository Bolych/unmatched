import React, {useState} from "react";

import {NavLink} from "react-router-dom";


const RobinAndBigfootHeroes = (props) => {
    return <div>
        <ul>
            <li><NavLink to='bigfoot' onClick={props.closeNavbar}>Bigfoot</NavLink></li>
            <li><NavLink to='robin' onClick={props.closeNavbar}>Robin Hood</NavLink></li>
        </ul>
    </div>
}

const RobinAndBigfoot = (props) => {

    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Robin Hood and Bigfoot</button>
        {show ? <RobinAndBigfootHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default RobinAndBigfoot