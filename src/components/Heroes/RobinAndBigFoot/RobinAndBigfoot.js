import React, {useState} from "react";

import {NavLink} from "react-router-dom";


const RobinAndBigfootHeroes = () => {
    return <div>
        <ul>
            <li><NavLink to='bigfoot'>Bigfoot</NavLink></li>
            <li><NavLink to='robin'>Robin Hood</NavLink></li>
        </ul>
    </div>
}

const RobinAndBigfoot = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Robin Hood and Bigfoot</button>
        {show ? <RobinAndBigfootHeroes/> : null}

    </div>)
}

export default RobinAndBigfoot