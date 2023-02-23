import {useState} from "react";
import ExpansionsButtons from "./ExpansionsButtons/ExpansionsButtons";
import HeroGenerator from "./HeroGenerator/HeroGenerator";
import HeroesWindow from "./HeroesOfExpansionsList/HeroesWindow";
import ResetButton from "./ResetButton/ResetButton";
import s from './HeroGenerator.module.css'


const battleOfLegendsHeroes = ['Alice', 'Meduza', 'Sinbad', 'Arthur']
const cobbleAndFogHeroes = ['Jackile', 'Scherlock', 'Drakula', 'Invisible']
const robinHoodAndBigfootHeroes = ['Robin', 'Bigfoot']
const redHoodAndBeowulfHeroes = ['Red Hood', 'Beowulf']
const battleOfLegendsVolTwoHeroes = ['Sun Wukong', 'Yennenga', 'Bloody Mary', 'Achilles']
const redemptionRowHeroes = ['Luke Cage', 'Moon Knight', 'Ghost Rider']
const marvelHellKitchen = ['Daredevil', 'Elektra', 'Bullseye']
const marvelTeenSpirit = ['Squirrel Girl', 'Ms. Marvel', 'Cloak and Dagger']
const marvelForKingAndCountry = ['Black Widow', 'Black Panther', 'Winter Soldier']
const jurassicParkRaptorHeroes = ['Robert Muldoon', 'Velociraptors']
const jurassicParkTrexHeroes = ['Dr Sattler', 'T-Rex']
const houdiniAndGenie = ['Houdini', 'The Genie']
const bruceLee = ['Bruce Lee']
const deadpool = ['Deadpool']


let heroesArr = []


// Generate Hero Function


const HeroGeneratorPage = () => {
    const [visibleHeroes, setVisibleHeroes] = useState('heroes window')
    const [hero, setHero] = useState('')
    return (
        <div className={s.content}>

            <div className={s.header}>
                <h1>Heroes generator</h1>
            </div>
            <div className={s.main}>

            <p>Can not decide what hero you should play? Choose Unmatched boxes you have, click "generate" and program
                will pick a random hero from this list</p>

            <div>
                <br/>
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
                <div>
                    <HeroesWindow heroesArr={heroesArr} setVisibleHeroes={setVisibleHeroes}
                                  visibleHeroes={visibleHeroes}/>
                </div>
                <br/>
                <br/>
                <div className={s.generateAndResetButtons}>
                    <HeroGenerator hero={hero} setHero={setHero} heroesArr={heroesArr}/>
                    <ResetButton visibleHeroes={visibleHeroes} setVisibleHeroes={setVisibleHeroes}
                                 heroesArr={heroesArr}/>
                </div>
                <div className={s.heroResult}>
                    <div><h2>Your hero is:</h2></div>
                    <br/>
                <div><h2>{hero}</h2></div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
            </div>
        </div>
    )


}

export default HeroGeneratorPage