import React, {useState} from "react";

import {useNavigate} from "react-router";
import s from "../Heroes.module.css";
import ImageSlider from "../../ImagesSlider/ImagesSlider";

//deck
import card1 from '../../../images/heroes/houdini-genie/genie/genie-deck/back-in-the-lamp.png'
import card3 from '../../../images/heroes/houdini-genie/genie/genie-deck/careful-what-you-wish-for.png'
import card4 from '../../../images/heroes/houdini-genie/genie/genie-deck/feint.png'
import card2 from '../../../images/heroes/houdini-genie/genie/genie-deck/i-am-freed.png'
import card5 from '../../../images/heroes/houdini-genie/genie/genie-deck/i-grant-you-death.png'
import card6 from '../../../images/heroes/houdini-genie/genie/genie-deck/imprisoned-wrath.png'
import card7 from '../../../images/heroes/houdini-genie/genie/genie-deck/ive-made-sultans-out-of-less.png'
import card8 from '../../../images/heroes/houdini-genie/genie/genie-deck/prisoners-torment.png'
import card9 from '../../../images/heroes/houdini-genie/genie/genie-deck/this-is-no-parlor-trick.png'
import card10 from '../../../images/heroes/houdini-genie/genie/genie-deck/three-wishes.png'
import card11 from '../../../images/heroes/houdini-genie/genie/genie-deck/wishing-for-more-wishes.png'
import card12 from '../../../images/heroes/houdini-genie/genie/genie-deck/your-wish-is-my-command.png'

//hero images
import avatar from '../../../images/heroes/houdini-genie/genie/genie-images/genie-ancient.jpg'
import image1 from '../../../images/heroes/houdini-genie/genie/genie-images/genie-multiply.png'
import image2 from '../../../images/heroes/houdini-genie/genie/genie-images/houdini-genie-minifigures.webp'


const Genie = ({state}) => {
    const [showCards, setShowCards] = useState(false)
    const handleToggleCards = () => {
        setShowCards(!showCards);
        window.scrollTo({top: 50000, behavior: 'smooth'})
    }

    let imgUrls = [avatar, image1, image2]

    const myStyleBackground = {
        backgroundColor: state.backgroundColor,
        height: '100%'
    };

    const headersBackground = {
        backgroundColor: state.headersBackgroundColor,
        color: state.fontColor
    }

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/${state.companionRoute}`);
    }

    return (<div style={myStyleBackground} className={s.content}>

            <div style={headersBackground}>
                <h1>{state.heroName}</h1>
            </div>
            <div className={s.wrapper}>
                <div className={s.middleSide}>
                    <p><span className={s.firstWord}>Companion:</span></p>
                    <p><span className={s.firstWord}>Name:</span> {state.companionName}</p>
                    <p><span className={s.firstWord}>Range:</span> {state.companionRange}</p>
                    <p><span className={s.firstWord}>Start health:</span> {state.companionHealth}</p>

                    {/*Companion button will be later*/}

                    {/*<button className={s.companionButton} onClick={handleClick}>More about companion*/}
                    {/*</button>*/}
                </div>

                {/*left and right gaps for big displays*/}
                <div className={s.leftSideGap}>
                    {/*<img src="" alt=""></img>*/}
                </div>
                <div className={s.rightSideGap}>
                    {/*<img src="" alt=""></img>*/}
                </div>


                <div className={s.leftSidePartOne}>
                    <p><span className={s.firstWord}>Name:</span> {state.heroName}</p>
                    <p><span className={s.firstWord}>Range:</span> {state.heroRange}</p>
                    <p><span className={s.firstWord}>Start health:</span> {state.heroHealth}</p>
                    <p><span className={s.firstWord}>Movement:</span> {state.movement}</p>
                    <p><span className={s.firstWord}>Origin:</span> {state.origin}</p>
                </div>
                <div className={s.leftSidePartTwo}>
                    <div style={headersBackground} className={s.fanStatsHeader}><h3>Non official stats:</h3></div>
                    <div className={s.fanStatsContainer}>
                        <p><span className={s.firstWord}>Tier:</span> {state.tier}</p>
                        <p><span className={s.firstWord}>Difficulty:</span> {state.difficulty}</p>
                        <p><span className={s.firstWord}>Overall power:</span> {state.overallPower}</p>
                    </div>
                </div>

                <div className={s.rightSide}>
                    <div className={s.imageSlider}>
                        <ImageSlider headersBackground={headersBackground} imgUrls={imgUrls}/>
                    </div>

                    <div>
                        <blockquote className={s.quote}>{state.heroQuote}</blockquote>                    </div>
                </div>
                <div className={s.downSide}>
                    <div style={headersBackground}>
                        <h2>Hero's traits</h2>
                    </div>
                    <p>{state.heroTrait}</p>

                    <div style={headersBackground}>
                        <h2>Tactics</h2>
                    </div>
                    <p>{state.tactics}  </p>
                    <div style={headersBackground}>
                        <h2>Description</h2>
                    </div>
                    <p> {state.description}  </p>
                </div>
            </div>

            <div>
                <div style={headersBackground}>
                    <h2>Hero's cards</h2>
                </div>
                <div className={s.showCardsButton} onClick={handleToggleCards}>
                    <h3>Click to show</h3>
                </div>
            </div>
            <br/>
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
                </div>
            </div>
        </div>
    )

}
export default Genie