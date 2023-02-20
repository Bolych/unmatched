import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const JurassicParkHeroes = () => {
    return <div>

        <ul>
            <li><NavLink to='drsattler'>Dr Sattler</NavLink></li>
            <li><NavLink to='ingen'>InGen</NavLink></li>
            <li><NavLink to='raptors'>Raptors</NavLink></li>
            <li><NavLink to='trex'>T-rex</NavLink></li>
        </ul>
    </div>
}

const JurassicPark = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Jurassic Park</button>
        {show ? <JurassicParkHeroes/> : null}

    </div>)
}

export default JurassicPark