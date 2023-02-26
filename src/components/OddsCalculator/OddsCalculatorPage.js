import {useContext, useState} from "react";
import EloProbability from "./ProbabilityCalculatorWindow";
import s from './OddsCalculatorPage.module.css'


// можно потом зарефакторить и сделать просто HeroToCompare
const HeroOneToCompare = (props) => {

  const  handleChange = (e) => {props.setHeroOne(e.target.value)
  }

    return (
        <div>
            <p>{props.name}</p>
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
            <p>{props.heroName}</p>
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





    const heroesInSelect = props.heroesArr.map(e => {
                return <option value={e.elo} key={e.id} >{e.heroName}</option>
        }
    )



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
                    <p>Without value - average player, who already played for this hero, but doesn't master heroes's mechanics(3-7 games )</p>
                    <p>Experienced - player who mastered mechanics of this hero ({` > `} 7 games)</p>
                </div>
                <br/>
                <HeroOneToCompare setHeroOne={setHeroOne} name='Hero one' state={heroesInSelect}/>
                <HeroTwoToCompare setHeroTwo={setHeroTwo} name='Hero two' state={heroesInSelect}/>
            </div>
            <br/>
            <EloProbability heroOne={heroOne} heroTwo={heroTwo}  state={heroesInSelect}/>
        </div>
    )
}



export default OddsCalculatorPage

