import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const JurassicParkHeroes = (props) => {
    return <div>

        <ul>
            <li><NavLink to='drsattler' onClick={props.closeNavbar}>Dr Sattler</NavLink></li>
            <li><NavLink to='ingen' onClick={props.closeNavbar}>InGen</NavLink></li>
            <li><NavLink to='raptors' onClick={props.closeNavbar}>Raptors</NavLink></li>
            <li><NavLink to='trex' onClick={props.closeNavbar}>T-rex</NavLink></li>
        </ul>
    </div>
}

const JurassicPark = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Jurassic Park</button>
        {show ? <JurassicParkHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default JurassicPark