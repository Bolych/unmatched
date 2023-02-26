import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import BattleOfLegends from "../Heroes/BattleOfLegends/BattleOfLegends";
import CobbleAndFog from "../Heroes/CobbleAndFog/CobbleAndFog";
import RobinAndBigfoot from "../Heroes/RobinAndBigFoot/RobinAndBigfoot";
import BeowulfAndRedHood from "../Heroes/RedHoodBeowulf/BeowulfAndRedHood";
import JurassicPark from "../Heroes/IngenVsRaptors/IngenRaptors";
import BattleOfLegendsVol2 from "../Heroes/BattleOfLegendsVol2/BattleOfLegendsVol2";
import Buffy from "../Heroes/Buffy/BuffyHeroes";
import MarvelTeenSpirit from "../Heroes/MarvelTeenSpirit/MarvelTeenSpirit";
import MarvelRedemptionRow from "../Heroes/MarvelRedemptionRow/MarvelRedemptionRow";
import MarvelHellsKitchen from "../Heroes/MarvelHellsKitchen/MarvelHellsKitchen";
import MarvelForKingAndCountry from "../Heroes/MarvelForKingAndCountry/MarvelForKingAndCountry";
import HoudiniAndGenie from "../Heroes/HoudiniAndGenie/HoudiniAndGenie";
import BruceLee from "../Heroes/BruceLee/BruceLeeLink";
import Deadpool from "../Heroes/Deadpool/DeadpoolLink";
import IngenRaptors from "../Heroes/IngenVsRaptors/IngenRaptors";
import BuffyExpansion from "../Heroes/Buffy/BuffyHeroes";

const Navbar = (props) => {


    return <div className='navbar'>
        <div className={s.closeButton} onClick={props.handleToggleSidebar}>✖</div>

        <div className={s.content}>
            <div className={s.navigationLinks}>
                <li><NavLink to='/' onClick={props.closeNavbar}>About </NavLink></li>
                <li><NavLink to='/generator' onClick={props.closeNavbar}>Generator</NavLink></li>
                <li><NavLink to='/calculator' onClick={props.closeNavbar}>Calculator </NavLink></li>
            </div>

            <div className={s.expansionsListCover}>
                <p>Encyclopedia:</p>
                <ul className={s.expansionsList}>
                    <li> <BattleOfLegends closeNavbar={props.closeNavbar}/></li>
                    <li><BruceLee closeNavbar={props.closeNavbar}/></li>
                    <li><RobinAndBigfoot closeNavbar={props.closeNavbar}/></li>
                    <li><IngenRaptors closeNavbar={props.closeNavbar}/></li>
                    <li><CobbleAndFog closeNavbar={props.closeNavbar}/></li>
                    <li><BuffyExpansion closeNavbar={props.closeNavbar}/></li>
                    <li><BeowulfAndRedHood closeNavbar={props.closeNavbar}/></li>
                    <li><BattleOfLegendsVol2 closeNavbar={props.closeNavbar}/></li>
                    <li><MarvelTeenSpirit closeNavbar={props.closeNavbar}/></li>
                    <li><MarvelRedemptionRow closeNavbar={props.closeNavbar}/></li>
                    <li><MarvelHellsKitchen closeNavbar={props.closeNavbar}/></li>
                    <li><MarvelForKingAndCountry closeNavbar={props.closeNavbar}/></li>
                    <li><HoudiniAndGenie closeNavbar={props.closeNavbar}/></li>
                    <li><Deadpool closeNavbar={props.closeNavbar}/></li>

                </ul>
            </div>
        </div>

    </div>


}

export default Navbar