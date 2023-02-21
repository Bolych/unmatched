import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import BattleOfLegends from "../Heroes/BattleOfLegends/BattleOfLegends";
import CobbleAndFog from "../Heroes/CobbleAndFog/CobbleAndFog";
import RobinAndBigfoot from "../Heroes/RobinAndBigFoot/RobinAndBigfoot";
import BeowulfAndRedHood from "../Heroes/RedHoodBeowulf/BeowulfAndRedHood";
import JurassicPark from "../Heroes/JurassicPark/JurrasicPark";
import BattleOfLegendsVol2 from "../Heroes/BattleOfLegendsVol2/BattleOfLegendsVol2";
import Buffy from "../Heroes/Buffy/BuffyHeroes";
import MarvelTeenSpirit from "../Heroes/MarvelTeenSpirit/MarvelTeenSpirit";
import MarvelRedemptionRow from "../Heroes/MarvelRedemptionRow/MarvelRedemptionRow";
import MarvelHellsKitchen from "../Heroes/MarvelHellsKitchen/MarvelHellsKitchen";
import MarvelForKingAndCountry from "../Heroes/MarvelForKingAndCountry/MarvelForKingAndCountry";
import HoudiniAndGenie from "../Heroes/HoudiniAndGenie/HoudiniAndGenie";
import BruceLee from "../Heroes/BruceLee/BruceLeeLink";
import Deadpool from "../Heroes/Deadpool/DeadpoolLink";

const Navbar = (props) => {
    return <div className='navbar'>


        <div className={s.content}>
            <div className={s.navigationLinks}>
                <li><NavLink to='/'>About </NavLink></li>
                <li><NavLink to='/generator'>Generator</NavLink></li>
                <li><NavLink to='/calculator'>Calculator </NavLink></li>
            </div>

            <div className={s.expansionsListCover}>
                <p>Encyclopedia:</p>
                <ul className={s.expansionsList}>
                    <li><BattleOfLegends/></li>
                    <li><CobbleAndFog/></li>
                    <li><RobinAndBigfoot/></li>
                    <li><BeowulfAndRedHood/></li>
                    <li><JurassicPark/></li>
                    <li><BattleOfLegendsVol2/></li>
                    <li><Buffy/></li>
                    <li><MarvelTeenSpirit/></li>
                    <li><MarvelRedemptionRow/></li>
                    <li><MarvelHellsKitchen/></li>
                    <li><MarvelForKingAndCountry/></li>
                    <li><HoudiniAndGenie/></li>
                    <li><BruceLee/></li>
                    <li><Deadpool/></li>

                </ul>
            </div>
        </div>

    </div>


}

export default Navbar