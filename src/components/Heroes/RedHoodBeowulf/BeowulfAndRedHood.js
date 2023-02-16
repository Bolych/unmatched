import {NavLink} from "react-router-dom";
import {useState} from "react";



const BeowulfAndRedHoodHeroes = () => {
    return <div>
        <div>
            <NavLink to='beowulf'>Beowulf</NavLink>
        </div>
        <div>
            <NavLink to='redhood'>Red Hood</NavLink>
        </div>


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