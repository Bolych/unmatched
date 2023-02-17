import {useState} from "react";
import ExpansionsButtons from "./ExpansionsButtons/ExpansionsButtons";
import HeroGenerator from "./HeroGenerator/HeroGenerator";
import HeroesWindow from "./HeroesOfExpansionsList/HeroesWindow";
import ResetButton from "./ResetButton/ResetButton";


let battleOfLegendsHeroes = ['Alice', 'Meduza', 'Sindbad', 'Arthur']
let cobbleAndFogHeroes = ['Jackile', 'Scherlock', 'Drakula', 'Invisible']
let robinHoodAndBigfootHeroes = ['Robin', 'Bigfoot']
let redHoodAndBeowulfHeroes = ['Red Hood', 'Beowulf']

let heroesArr = []

let heroes = ['Alice', 'Meduza', 'Sindbad', 'Arthur', 'Robin', 'Bigfoot', 'Red hood', 'Beowulf', 'Jackile', 'Scherlock', 'Drakula', 'Invisible']


// Generate Hero Function


const HeroGeneratorPage = (props) => {
    const [visibleHeroes, setVisibleHeroes] = useState('heroes window')

    return (
        <div>

            <div>
                <HeroesWindow heroesArr={heroesArr} setVisibleHeroes={setVisibleHeroes} visibleHeroes={visibleHeroes}/>
            </div>
            <div><ResetButton visibleHeroes={visibleHeroes} setVisibleHeroes={setVisibleHeroes} heroesArr={heroesArr}/>
            </div>

            <HeroGenerator heroesArr={heroesArr}/>
            <div>
                <ExpansionsButtons visibleHeroes={visibleHeroes} setVisibleHeroes={setVisibleHeroes}
                                   heroesArr={heroesArr} battleOfLegendHeroes={battleOfLegendsHeroes}
                                   cobbleAndFogHeroes={cobbleAndFogHeroes}
                                   robinHoodAndBigfootHeroes={robinHoodAndBigfootHeroes}
                                   redHoodAndBeowulfHeroes={redHoodAndBeowulfHeroes}/>
            </div>

        </div>
    )


}

export default HeroGeneratorPage