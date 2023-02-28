import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes} from "react-router-dom";
import OddsCalculatorPage from "./components/OddsCalculator/OddsCalculatorPage";
import Arthur from "./components/Heroes/BattleOfLegends/Arthur";
import Alice from "./components/Heroes/BattleOfLegends/Alice";
import Medusa from "./components/Heroes/BattleOfLegends/Medusa";
import Dracula from "./components/Heroes/CobbleAndFog/Dracula";
import Invisible from "./components/Heroes/CobbleAndFog/Invisible";
import Sherlock from "./components/Heroes/CobbleAndFog/Sherlock";
import Jekyll from "./components/Heroes/CobbleAndFog/Jekyll";
import RobinHood from "./components/Heroes/RobinAndBigFoot/RobinHood";
import Bigfoot from "./components/Heroes/RobinAndBigFoot/Bigfoot";
import RedHood from "./components/Heroes/BeowulfRedHood/RedHood";
import Beowulf from "./components/Heroes/BeowulfRedHood/Beowulf";
import HeroGeneratorPage from "./components/HeroGenerator/HeroGeneratorPage";
import {useState} from "react";
import AboutPage from "./components/AboutPage/AboutPage";
import SunWukong from "./components/Heroes/BattleOfLegendsVol2/SunWukong";
import Yennenga from "./components/Heroes/BattleOfLegendsVol2/Yennenga";
import Sinbad from "./components/Heroes/BattleOfLegends/Sindbad";
import Merlin from "./components/Heroes/BattleOfLegends/ArthurCompanion";
import Achilles from "./components/Heroes/BattleOfLegendsVol2/Achilles";
import BloodyMary from "./components/Heroes/BattleOfLegendsVol2/BloodyMary";
import BruceLee from "./components/Heroes/BruceLee/BruceLee";
import Ingen from "./components/Heroes/IngenVsRaptors/Ingen";
import Raptors from "./components/Heroes/IngenVsRaptors/Raptors";
import Angel from "./components/Heroes/Buffy/Angel";
import Spike from "./components/Heroes/Buffy/Spike";
import Willow from "./components/Heroes/Buffy/Willow";
import Buffy from "./components/Heroes/Buffy/Buffy";
import Deadpool from "./components/Heroes/Deadpool/Deadpool";
import LukeCage from "./components/Heroes/MarvelRedemptionRow/LukeCage";
import GhostRider from "./components/Heroes/MarvelRedemptionRow/GhostRider";
import MoonKnight from "./components/Heroes/MarvelRedemptionRow/MoonKnight";
import Daredevil from "./components/Heroes/MarvelHellsKitchen/Daredevil";
import Bullseye from "./components/Heroes/MarvelHellsKitchen/Bullseye";
import Elektra from "./components/Heroes/MarvelHellsKitchen/Elektra";
import Sattler from "./components/Heroes/SattlerTrex/Sattler";
import Trex from "./components/Heroes/SattlerTrex/Trex";
import Houdini from "./components/Heroes/HoudiniAndGenie/Houdini";
import Genie from "./components/Heroes/HoudiniAndGenie/Genie";
import BlackPanther from "./components/Heroes/MarvelForKingAndCountry/BlackPanther";
import BlackWidow from "./components/Heroes/MarvelForKingAndCountry/BlackWidow";
import WinterSoldier from "./components/Heroes/MarvelForKingAndCountry/WinterSoldier";
import MsMarvel from "./components/Heroes/MarvelTeenSpirit/MsMarvel";
import SquirrelGirl from "./components/Heroes/MarvelTeenSpirit/SquirrelGirl";
import CloakAndDagger from "./components/Heroes/MarvelTeenSpirit/CloakAndDagger";


function App(props) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // making sidebar collapsing and going to top after closing
    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    function closeNavbar() {
        setIsSidebarOpen(true);
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }


    return (
            <div className="App">

                <Header handleToggleSidebar={handleToggleSidebar} />
                <div className={`navbar ${isSidebarOpen ? 'active' : ''}`}>
                    <Navbar  handleToggleSidebar={handleToggleSidebar} closeNavbar={closeNavbar}/>
                </div>

                <div className='main-content'>
                    <Routes>
                        <Route exact path='/' element={<AboutPage/>}/>
                        <Route path=' ' element={<AboutPage/>}/>
                        {/*{heroesList}*/}
                        <Route path='/generator' element={<HeroGeneratorPage/>}/>
                        <Route path='/calculator' element={<OddsCalculatorPage heroesArr={props.heroesArr} />}/>
                        {/*Battle of Legends Heroes:*/}
                        <Route path='/arthur' element={  <Arthur state={props.arthur}/>}/>
                        <Route path='/arthur' element={  <Arthur state={props.arthur}/>}/>
                        <Route path='/alice' element={  <Alice state={props.alice}/>}/>
                        <Route path='/medusa' element={  <Medusa state={props.medusa}/>}/>
                        <Route path='/sinbad' element={  <Sinbad state={props.sinbad}/>}/>
                        {/*Bruce Lee*/}
                        <Route path='/bruce-lee' element={  <BruceLee state={props.bruceLee}/>}/>
                        {/*Ingen vs Raptors*/}
                        <Route path='/ingen' element={  <Ingen state={props.ingen}/>}/>
                        <Route path='/raptors' element={  <Raptors state={props.raptors}/>}/>
                        {/*Cobble and Fog Heroes:*/}
                        <Route path='/dracula' element={  <Dracula state={props.dracula}/>}/>
                        <Route path='/invisible' element={  <Invisible state={props.invisible}/>}/>
                        <Route path='/sherlock' element={  <Sherlock state={props.sherlock}/>}/>
                        <Route path='/jekyll' element={  <Jekyll state={props.jekyll}/>}/>
                        {/*Robin and Bigfoot:*/}
                        <Route path='/robin-hood' element={  <RobinHood state={props.robinHood}/>}/>
                        <Route path='/bigfoot' element={  <Bigfoot state={props.bigfoot}/>}/>
                        {/*Buffy*/}
                        <Route path='/angel' element={  <Angel state={props.angel}/>}/>
                        <Route path='/buffy' element={  <Buffy state={props.buffy}/>}/>
                        <Route path='/spike' element={  <Spike state={props.spike}/>}/>
                        <Route path='/willow' element={  <Willow state={props.willow}/>}/>
                        {/*Beowulf and Red Hood*/}
                        <Route path='/beowulf' element={  <Beowulf state={props.beowulf}/>}/>
                        <Route path='/red-hood' element={  <RedHood state={props.redHood}/>}/>
                        {/*Deadpool*/}
                        <Route path='/deadpool' element={  <Deadpool state={props.deadpool}/>}/>
                        {/*Battle of Legends vol.2*/}
                        <Route path='/achilles' element={  <Achilles state={props.achilles}/>}/>
                        <Route path='/bloody-mary' element={  <BloodyMary state={props.bloodyMary}/>}/>
                        <Route path='/sun-wukong' element={  <SunWukong state={props.sunWukong}/>}/>
                        <Route path='/yennenga' element={  <Yennenga state={props.yennenga}/>}/>
                        {/*Redemption row*/}
                        <Route path='/luke-cage' element={  <LukeCage state={props.lukeCage}/>}/>
                        <Route path='/ghost-rider' element={  <GhostRider state={props.ghostRider}/>}/>
                        <Route path='/moon-knight' element={  <MoonKnight state={props.moonKnight}/>}/>
                        {/*Hell's kitchen*/}
                        <Route path='/daredevil' element={  <Daredevil state={props.daredevil}/>}/>
                        <Route path='/bullseye' element={  <Bullseye state={props.bullseye}/>}/>
                        <Route path='/elektra' element={  <Elektra state={props.elektra}/>}/>
                        {/*Dr Sattler vs T-rex*/}
                        <Route path='/sattler' element={  <Sattler state={props.sattler}/>}/>
                        <Route path='/t-rex' element={  <Trex state={props.trex}/>}/>
                    {/*    Houdini vs the Genie*/}
                        <Route path='/houdini' element={  <Houdini state={props.houdini}/>}/>
                        <Route path='/genie' element={  <Genie state={props.genie}/>}/>
                        {/*For king and country*/}
                        <Route path='/black-panther' element={  <BlackPanther state={props.blackPanther}/>}/>
                        <Route path='/black-widow' element={  <BlackWidow state={props.blackWidow}/>}/>
                        <Route path='/winter-soldier' element={<WinterSoldier state={props.winterSoldier}/>}/>
                        {/*Teen spirit*/}
                        <Route path='/ms-marvel' element={  <MsMarvel state={props.msMarvel}/>}/>
                        <Route path='/squirrel-girl' element={  <SquirrelGirl state={props.squirrelGirl}/>}/>
                        <Route path='/cloak-and-dagger' element={  <CloakAndDagger state={props.cloakAndDagger}/>}/>

                    {/*    Companions:*/}
                        <Route path='/merlin' element={  <Merlin state={props.arthur}/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
