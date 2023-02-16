
import React, {useState} from "react";

import {NavLink} from "react-router-dom";


const RobinAndBigfootHeroes = () => {
    return <div>
        <div>
            <NavLink to='bigfoot'>Bigfoot</NavLink>
        </div>
        <div>
            <NavLink to='robin'>Robin Hood</NavLink>
        </div>


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