import s from './BattleOfLegends.module.css'

import card1 from '../../../images/decks/arthur/aid-the-chosen-one.png'
import card2 from '../../../images/decks/arthur/bewilderment.png'
import card3 from '../../../images/decks/arthur/command-the-storms.png'
import card4 from '../../../images/decks/arthur/divine-intervention.png'
import card5 from '../../../images/decks/arthur/excalibur.png'
import card6 from '../../../images/decks/arthur/feint.png'
import card7 from '../../../images/decks/arthur/momentous-shift.png'
import card8 from '../../../images/decks/arthur/noble-sacrifice.png'
import card9 from '../../../images/decks/arthur/prophecy.png'
import card10 from '../../../images/decks/arthur/regroup.png'
import card11 from '../../../images/decks/arthur/restless-spirits.png'
import card12 from '../../../images/decks/arthur/skirmish (1).png'
import card13 from '../../../images/decks/arthur/swift-strike.png'
import card14 from '../../../images/decks/arthur/the-aid-of-morgana.png'
import card15 from '../../../images/decks/arthur/the-holy-grail.png'
import card16 from '../../../images/decks/arthur/the-lady-of-the-lake.png'


const Arthur = ({state}) => {
    const myStyle = {
        backgroundColor: state.backgroundColor,
        height: '100%'
    };

    console.log(state.avatar)
    console.log(state.name)
console.log(state.card1)
    return (<div style={myStyle} className={s.content}>
            <div className={s.header}>
            <h1>King Arthur</h1>
            </div>
            <div  className={s.wrapper}>
                <div className={s.leftSide}>
                    <p>Name: {state.name}</p>
                    <p>Attack: {state.attack}</p>
                    <p>Survivability: {state.survivability}</p>
                    <p>Difficulty: {state.difficulty}</p>
                    <p>Origin: {state.origin}</p>
                </div>
                <div className={s.rightSide}>
                    <img src={state.avatar}/>
                </div>
                <div className={s.downSide}>
                    <h2>Description</h2>
                    <p>{state.tactics}  </p>
                    <h2>Tactics</h2>
                    <p> {state.description}  </p>
                </div>
            </div>
            <h2>Arhur's cards</h2>
                <div className={s.cards}>
                    <img  src={card1} alt="none"/>
                <img  src={card2} alt="none"/>
                <img  src={card3} alt="none"/>
                <img  src={card4} alt="none"/>
                <img  src={card5} alt="none"/>
                <img  src={card6} alt="none"/>
                <img  src={card7} alt="none"/>
                <img  src={card8} alt="none"/>
                <img  src={card9} alt="none"/>
                <img  src={card10} alt="none"/>
                <img  src={card11} alt="none"/>
                <img  src={card12} alt="none"/>
                <img  src={card13} alt="none"/>
                <img  src={card14} alt="none"/>
                <img  src={card15} alt="none"/>
                <img  src={card16} alt="none"/>

                </div>

        </div>
    )

}
export default Arthur
