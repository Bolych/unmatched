import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Arthur from "./components/Heroes/BattleOfLegends/Arthur";
import Alice from "./components/Heroes/BattleOfLegends/Alice";
import Medusa from "./components/Heroes/BattleOfLegends/Medusa";
import Sindbad from "./components/Heroes/BattleOfLegends/Sindbad";
import Dracula from "./components/Heroes/CobbleAndFog/Dracula";
import Invisible from "./components/Heroes/CobbleAndFog/Invisible";
import Sherlock from "./components/Heroes/CobbleAndFog/Sherlock";
import Jackile from "./components/Heroes/CobbleAndFog/Jackile";
import RobinHood from "./components/Heroes/RobinAndBigFoot/RobinHood";
import Bigfoot from "./components/Heroes/RobinAndBigFoot/Bigfoot";
import RedHood from "./components/Heroes/RedHoodBeowulf/RedHood";
import Beowulf from "./components/Heroes/RedHoodBeowulf/Beowulf";
import HeroGeneratorPage from "./components/HeroGenerator/HeroGenerator";

function App(props) {
    console.log(props)

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <div>
                    <Routes>
                        {/*{heroesList}*/}
                        <Route path='/generator' element={<HeroGeneratorPage/>}/>
                        <Route path='/calculator' element={<Calculator/>}/>
                        {/*Battle of Legends Heroes:*/}
                        <Route path='/arthur' element={  <Arthur state={props.arthur}/>}/>
                        <Route path='/alice' element={  <Alice state={props.alice}/>}/>
                        <Route path='/medusa' element={  <Medusa state={props.medusa}/>}/>
                        <Route path='/sindbad' element={  <Sindbad state={props.sindbad}/>}/>
                        {/*Cobble and Fog Heroes:*/}
                        <Route path='/dracula' element={  <Dracula state={props.dracula}/>}/>
                        <Route path='/invisible' element={  <Invisible state={props.invisible}/>}/>
                        <Route path='/sherlock' element={  <Sherlock state={props.sherlock}/>}/>
                        <Route path='/jackile' element={  <Jackile state={props.jackile}/>}/>
                        {/*Robin and Bigfoot:*/}
                        <Route path='/robin' element={  <RobinHood state={props.robinhood}/>}/>
                        <Route path='/bigfoot' element={  <Bigfoot state={props.bigfoot}/>}/>
                        {/*Beowulf and Red Hood*/}
                        <Route path='/beowulf' element={  <Beowulf state={props.beowulf}/>}/>
                        <Route path='/redhood' element={  <RedHood state={props.redhood}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
