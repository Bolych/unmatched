import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import BattleOfLegends from "../Heroes/BattleOfLegends/BattleOfLegends";
import CobbleAndFog from "../Heroes/CobbleAndFog/CobbleAndFog";
import RobinAndBigfoot from "../Heroes/RobinAndBigFoot/RobinAndBigfoot";
import BeowulfAndRedHood from "../Heroes/RedHoodBeowulf/BeowulfAndRedHood";
import JurassicPark from "../Heroes/JurassicPark/JurrasicPark";

const Navbar = () => {
    return <div className={s.main}>
        <div className={s.navbar}>

            <div>
                <NavLink to='/generator'>Generator</NavLink>
            </div>
            <div>
                <NavLink to='/calculator'>Calculator </NavLink>
            </div>
            <ul className={s.expansionsList}>
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