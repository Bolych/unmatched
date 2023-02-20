import {NavLink} from "react-router-dom";
import {useState} from "react";


const BeowulfAndRedHoodHeroes = () => {
    return <div>
        <ul>
            <li><NavLink to='beowulf'>Beowulf</NavLink></li>
            <li><NavLink to='redhood'>Red Hood</NavLink></li>
        </ul>
    </div>
}

const BeowulfAndRedHood = () => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Beowulf and Red Hood</button>
        {show ? <BeowulfAndRedHoodHeroes/> : null}

    </div>)
}

export default BeowulfAndRedHood