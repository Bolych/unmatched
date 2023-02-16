
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const JurassicParkHeroes = () => {
    return <div>
        <div>
            <NavLink to='drsattler'>Dr Sattler</NavLink>
        </div>
        <div>
            <NavLink to='ingen'>InGen</NavLink>
        </div>
        <div>
            <NavLink to='raptors'>Raptors</NavLink>
        </div>
        <div>
            <NavLink to='trex'>T-rex</NavLink>
        </div>
    </div>
}

const JurassicPark = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={()=> setShow(!show)}>Jurassic Park</button>
        {show? <JurassicParkHeroes/> : null}

    </div>)
}

export default JurassicPark