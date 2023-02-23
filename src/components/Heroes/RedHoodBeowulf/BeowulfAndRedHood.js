import {NavLink} from "react-router-dom";
import {useState} from "react";


const BeowulfAndRedHoodHeroes = (props) => {
    return <div>
        <ul>
            <li><NavLink to='beowulf' onClick={props.closeNavbar}>Beowulf</NavLink></li>
            <li><NavLink to='redhood' onClick={props.closeNavbar}>Red Hood</NavLink></li>
        </ul>
    </div>
}

const BeowulfAndRedHood = (props) => {
    const [show, setShow] = useState(false)
    return (<div>
        <button onClick={() => setShow(!show)}>Beowulf and Red Hood</button>
        {show ? <BeowulfAndRedHoodHeroes closeNavbar={props.closeNavbar}/> : null}

    </div>)
}

export default BeowulfAndRedHood