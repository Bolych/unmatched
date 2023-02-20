import {useState} from "react";
import ExpansionsButtons from "./ExpansionsButtons/ExpansionsButtons";
import HeroGenerator from "./HeroGenerator/HeroGenerator";
import HeroesWindow from "./HeroesOfExpansionsList/HeroesWindow";
import ResetButton from "./ResetButton/ResetButton";


const battleOfLegendsHeroes = ['Alice', 'Meduza', 'Sindbad', 'Arthur']
const cobbleAndFogHeroes = ['Jackile', 'Scherlock', 'Drakula', 'Invisible']
const robinHoodAndBigfootHeroes = ['Robin', 'Bigfoot']
const redHoodAndBeowulfHeroes = ['Red Hood', 'Beowulf']
const battleOfLegendsVolTwoHeroes = ['Sun Wukong', 'Yennenga', 'Bloody Mary', 'Achilles']
const redemptionRowHeroes = ['Luke Cage', 'Moon Knight','Ghost Rider']
const marvelHellKitchen = ['Daredevil', 'Elektra', 'Bullseye' ]
const marvelTeenSpirit = [ 'Squirrel Girl', 'Ms. Marvel', 'Cloak and Dagger']
const marvelForKingAndCountry = ['Black Widow', 'Black Panther', 'Winter Soldier']
const jurassicParkRaptorHeroes = ['Robert Muldoon', 'Velociraptors']
const jurassicParkTrexHeroes = ['Dr Sattler, T-Rex']
const houdiniAndGenie = ['Houdini', 'The Genie']
const bruceLee = ['Bruce Lee']
const deadpool = ['Deadpool']


let heroesArr = []



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
<br/>
<br/>
<br/>
            <HeroGenerator heroesArr={heroesArr}/>
            <div>
                <ExpansionsButtons visibleHeroes={visibleHeroes} setVisibleHeroes={setVisibleHeroes}
                                   heroesArr={heroesArr} battleOfLegendHeroes={battleOfLegendsHeroes}
                                   cobbleAndFogHeroes={cobbleAndFogHeroes}
                                   robinHoodAndBigfootHeroes={robinHoodAndBigfootHeroes}
                                   redHoodAndBeowulfHeroes={redHoodAndBeowulfHeroes}
                                   battleoFLegendsVolTwoHeroes={battleOfLegendsVolTwoHeroes}
                                   redemptionRowHeroes={redemptionRowHeroes}
                                   marvelHellKitchen={marvelHellKitchen}
                                   marvelForKingAndCountry={marvelForKingAndCountry}
                                   marvelTeenSpirit={marvelTeenSpirit}
                                   jurassicParkRaptorHeroes={jurassicParkRaptorHeroes}
                                   jurassicParkTrexHeroes={jurassicParkTrexHeroes}
                                   houdiniAndGenie={houdiniAndGenie}
                                   bruceLee={bruceLee}
                                   deadpool={deadpool}
                />

            </div>

        </div>
    )


}

export default HeroGeneratorPage