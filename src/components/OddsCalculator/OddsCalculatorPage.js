import { useState} from "react";
import EloProbability from "./ProbabilityCalculatorWindow";
import s from './OddsCalculatorPage.module.css'


// Hero one
const HeroOneToCompare = (props) => {
  const  handleChange = (e) => {props.setHeroOne(e.target.value)
  }
    return (
        <div>
            <p>Hero one:</p>
            <div>
                <div>
                    <select value={props.elo} onChange={handleChange}>
                        <option></option>
                        {props.state}
                    </select>
                </div>
            </div>
        </div>
    )
}

const HeroTwoToCompare = (props) => {
    const  handleChange = (e) => {props.setHeroTwo(e.target.value)
        console.log(e.target)
    }
    return (
        <div>
            <p>Hero two:</p>
            <div>
                <div>
                    <select value={props.elo} onChange={handleChange}>
                        <option></option>
                        {props.state}
                    </select>
                </div>
            </div>

        </div>
    )
}

const OddsCalculatorPage = (props) => {
    const [heroOne, setHeroOne] = useState('Hero one')
    const [heroTwo, setHeroTwo] = useState('Hero two')

// made alphabetically sorted list of heroes in <select>
    const heroesInSelect = props.heroesArr.map(e => e.heroName).sort().map(name =>
        {
            const matchingHero = props.heroesArr.find(hero => hero.heroName === name);
            return <option value={matchingHero.elo} key={matchingHero.id}>{name}</option>;
        });
    return (<div className={s.content}>
            <div className={s.header}>
                <h1>Odds probability calculator</h1>
            </div>
            <div>
                <p>Don't know what hero is stronger? Who to pick for yourself and who to give your newbie friend?</p>
                <p>Choose heroes and level of players and program will calculate chance of winning.</p>
                <p>All is approximately, of course, but based on real games.</p>
                <br/>
                <h3>Heroes levels:</h3>
                <div>
                    <p>Novice - unexperienced player or player, who doesn't know deck of this hero (    {` < `}2 games)</p>
                    <p>Without value - average player, who already played for this hero, but doesn't master hero's mechanics (3-7 games)</p>
                    <p>Experienced - player who mastered mechanics of this hero ({` > `} 7 games)</p>
                </div>
                <br/>
                <HeroOneToCompare setHeroOne={setHeroOne}  state={heroesInSelect}/>
                <HeroTwoToCompare setHeroTwo={setHeroTwo}  state={heroesInSelect}/>
            </div>
            <br/>
            <EloProbability heroOne={heroOne} heroTwo={heroTwo}  state={heroesInSelect}/>
        </div>
    )
}



export default OddsCalculatorPage

