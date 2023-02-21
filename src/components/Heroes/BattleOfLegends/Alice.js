import s from '../Heroes.module.css'
import card1 from '../../../images/decks/alice/claws-that-catch.png'
import card2 from '../../../images/decks/alice/drink-me.png'
import card3 from '../../../images/decks/alice/eat-me.png'
import card4 from '../../../images/decks/alice/feint.png'
import card5 from '../../../images/decks/alice/i-m-late-i-m-late.png'
import card6 from '../../../images/decks/alice/jaws-that-bite.png'
import card7 from '../../../images/decks/alice/looking-glass.png'
import card8 from '../../../images/decks/alice/mad-as-a-hatter.png'
import card9 from '../../../images/decks/alice/manxome-foe.png'
import card10 from '../../../images/decks/alice/momentous-shift.png'
import card11 from '../../../images/decks/alice/o-frabjous-day.png'
import card12 from '../../../images/decks/alice/regroup.png'
import card13 from '../../../images/decks/alice/skirmish.png'
import card14 from '../../../images/decks/alice/snicker-snack.png'
import card15 from '../../../images/decks/alice/the-other-side-of-the-mushroom.png'
import React, {useState} from "react";



const Alice = ({state}) => {
    const [showCards, setShowCards] = useState(false)
    const handleToggleCards = () => {
        setShowCards(!showCards);
    }

    const myStyle = {
        backgroundColor: state.backgroundColor,
        height: '100%'
    };

    return (<div style={myStyle} className={s.content}>

            <div className={s.header}>
                <h1>{state.name}</h1>
            </div>
            <div  className={s.wrapper}>
                <div className={s.leftSide}>
                    <p><span className={s.firstWord}> Name:</span> {state.name}</p>
                    <p> <span className={s.firstWord}>Attack:</span>  {state.attack}</p>
                    <p> <span className={s.firstWord}>Survivability:</span>  {state.survivability}</p>
                    <p> <span className={s.firstWord}>Difficulty:</span>  {state.difficulty}</p>
                    <p> <span className={s.firstWord}>Origin:</span>  {state.origin}</p>
                </div>
                <div className={s.rightSide}>
                    <img src={state.avatar}/>
                </div>
                <div className={s.downSide}>
                    <div className={s.header}>
                        <h2>Tactics</h2>
                    </div>
                    <p>{state.tactics}  </p>
                    <div className={s.header}>
                        <h2>Description</h2>
                    </div>
                    <p> {state.description}  </p>
                </div>
            </div>

            <div>
                <div className={s.header}>
                    <h2>Hero's cards</h2>
                </div>
                <div className={s.showCardsButton} onClick={handleToggleCards}>
                    <h3>Click to show</h3>
                </div>
            </div>

            <div className={`cards-wrapper ${showCards ? 'active' : ''}`}>
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

                </div>
            </div>
        </div>
    )

}

export default Alice
