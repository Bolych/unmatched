import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import BattleOfLegends from "../Heroes/BattleOfLegends/BattleOfLegends";
import CobbleAndFog from "../Heroes/CobbleAndFog/CobbleAndFog";
import RobinAndBigfoot from "../Heroes/RobinAndBigFoot/RobinAndBigfoot";
import BeowulfAndRedHood from "../Heroes/RedHoodBeowulf/BeowulfAndRedHood";
import JurassicPark from "../Heroes/JurassicPark/JurrasicPark";

const Navbar = (props) => {
    return <div className='navbar'>


        <div  className={s.content}>
            <div className={s.navigationLinks}>
                <li><NavLink to='/'>About </NavLink></li>
                <li><NavLink to='/generator'>Generator</NavLink></li>
                <li><NavLink to='/calculator'>Calculator </NavLink></li>
            </div>
            <ul className={s.expansionsList}>
                <p>Encyclopedia:</p>
                <li><BattleOfLegends/></li>
                <li><CobbleAndFog/></li>
                <li><RobinAndBigfoot/></li>
                <li><BeowulfAndRedHood/></li>
                <li><JurassicPark/></li>
            </ul>

        </div>

    </div>


}

export default Navbar