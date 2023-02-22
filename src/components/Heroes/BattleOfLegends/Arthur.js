import s from '../Heroes.module.css'

import card1 from '../../../images/decks/battleOfLegendsVol1/arthur/aid-the-chosen-one.png'
import card2 from '../../../images/decks/battleOfLegendsVol1/arthur/bewilderment.png'
import card3 from '../../../images/decks/battleOfLegendsVol1/arthur/command-the-storms.png'
import card4 from '../../../images/decks/battleOfLegendsVol1/arthur/divine-intervention.png'
import card5 from '../../../images/decks/battleOfLegendsVol1/arthur/excalibur.png'
import card6 from '../../../images/decks/battleOfLegendsVol1/arthur/feint.png'
import card7 from '../../../images/decks/battleOfLegendsVol1/arthur/momentous-shift.png'
import card8 from '../../../images/decks/battleOfLegendsVol1/arthur/noble-sacrifice.png'
import card9 from '../../../images/decks/battleOfLegendsVol1/arthur/prophecy.png'
import card10 from '../../../images/decks/battleOfLegendsVol1/arthur/regroup.png'
import card11 from '../../../images/decks/battleOfLegendsVol1/arthur/restless-spirits.png'
import card12 from '../../../images/decks/battleOfLegendsVol1/arthur/skirmish (1).png'
import card13 from '../../../images/decks/battleOfLegendsVol1/arthur/swift-strike.png'
import card14 from '../../../images/decks/battleOfLegendsVol1/arthur/the-aid-of-morgana.png'
import card15 from '../../../images/decks/battleOfLegendsVol1/arthur/the-holy-grail.png'
import card16 from '../../../images/decks/battleOfLegendsVol1/arthur/the-lady-of-the-lake.png'
import React, {useState} from "react";
import {useNavigate} from "react-router";
import ImageSlider from "../../ImagesSlider/ImagesSlider";


const Arthur = ({state}) => {
    const [showCards, setShowCards] = useState(false)
    const handleToggleCards = () => {
        setShowCards(!showCards);
    }

    let img1 = state.heroAvatar;
    let img2 = state.img2;
    let img3 = state.img3;

    let imgUrls = [img1, img2, img3]

    const myStyle = {
        backgroundColor: state.backgroundColor,
        height: '100%'
    };
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/${state.companionRoute}`);
    }

    return (<div style={myStyle} className={s.content}>

            <div className={s.header}>
                <h1>{state.heroName}</h1>
            </div>
            <div className={s.wrapper}>
                <div className={s.middleSide}>
                    <p className={s.firstWord}>Companion:</p>
                    <p><span className={s.firstWord}> Name:</span> {state.companionName}</p>
                    <p><span className={s.firstWord}> Range:</span> {state.companionRange}</p>
                    <p><span className={s.firstWord}> Start health:</span> {state.companionHealth}</p>
                    <button className={s.companionButton} onClick={handleClick}>Click to read more about companion</button>
                </div>

                <div className={s.leftSide}>
                    <p className={s.firstWord}>Hero:</p>
                    <p><span className={s.firstWord}> Name:</span> {state.heroName}</p>
                    <p><span className={s.firstWord}> Range:</span> {state.heroRange}</p>
                    <p><span className={s.firstWord}> Start health:</span> {state.heroHealth}</p>
                    <p><span className={s.firstWord}> Movement:</span> {state.movement}</p>
                    <p><span className={s.firstWord}>Origin:</span> {state.origin}</p>

                    <div className={s.fanStatsHeader}><h3>Non official stats:</h3></div>
                    <p><span className={s.firstWord}>Attack:</span> {state.attack}</p>
                    <p><span className={s.firstWord}>Survivability:</span> {state.survivability}</p>
                    <p><span className={s.firstWord}>Difficulty:</span> {state.difficulty}</p>
                </div>

                <div className={s.rightSide}>
                    <div className={s.imageSlider}>
                    <ImageSlider imgUrls={imgUrls}/>
                    </div>
                    <div className={s.quote}>
                    <p >{state.heroQuote}</p>
                    </div>
                </div>
                <div className={s.downSide}>
                    <div className={s.header}>
                        <h2>Hero's traits</h2>
                    </div>
                    <p>{state.heroTrait}</p>

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
                    <img src={card1} alt="none"/>
                    <img src={card2} alt="none"/>
                    <img src={card3} alt="none"/>
                    <img src={card4} alt="none"/>
                    <img src={card5} alt="none"/>
                    <img src={card6} alt="none"/>
                    <img src={card7} alt="none"/>
                    <img src={card8} alt="none"/>
                    <img src={card9} alt="none"/>
                    <img src={card10} alt="none"/>
                    <img src={card11} alt="none"/>
                    <img src={card12} alt="none"/>
                    <img src={card13} alt="none"/>
                    <img src={card14} alt="none"/>
                    <img src={card15} alt="none"/>
                    <img src={card16} alt="none"/>
                </div>
            </div>
        </div>
    )

}
export default Arthur



