import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {NavLink, Route, Routes} from "react-router-dom";
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
import RedHood from "./components/Heroes/RedHoodBeowulf/RedHood";
import Beowulf from "./components/Heroes/RedHoodBeowulf/Beowulf";
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


function App(props) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
                        <Route path='/robin-hood' element={  <RobinHood state={props.robinhood}/>}/>
                        <Route path='/bigfoot' element={  <Bigfoot state={props.bigfoot}/>}/>
                        {/*Buffy*/}
                        <Route path='/angel' element={  <Angel state={props.angel}/>}/>
                        <Route path='/buffy' element={  <Bigfoot state={props.bigfoot}/>}/>
                        <Route path='/spike' element={  <Bigfoot state={props.bigfoot}/>}/>
                        <Route path='/willow' element={  <Bigfoot state={props.bigfoot}/>}/>
                        {/*Beowulf and Red Hood*/}
                        <Route path='/beowulf' element={  <Beowulf state={props.beowulf}/>}/>
                        <Route path='/redhood' element={  <RedHood state={props.redhood}/>}/>
                        {/*Battle of Legends vol.2*/}
                        <Route path='/achilles' element={  <Achilles state={props.achilles}/>}/>
                        <Route path='/bloody-mary' element={  <BloodyMary state={props.bloodyMary}/>}/>
                        <Route path='/yennenga' element={  <SunWukong state={props.sunWukong}/>}/>
                        <Route path='/sun-wukong' element={  <Yennenga state={props.yennenga}/>}/>

                    {/*    Companions:*/}
                        <Route path='/merlin' element={  <Merlin state={props.arthur}/>}/>



                    </Routes>
                </div>
            </div>

    );
}

export default App;
