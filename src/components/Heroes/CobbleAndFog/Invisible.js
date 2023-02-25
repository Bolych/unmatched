const Invisible = () => {
    return <div><p>Invisible</p></div>
}

export default Invisible




// import React, {useState} from "react";
//
// import {useNavigate} from "react-router";
// import s from "../Heroes.module.css";
// import ImageSlider from "../../ImagesSlider/ImagesSlider";
//
// //deck
// import card1 from ''
// import card2 from ''
// import card3 from ''
// import card4 from ''
// import card5 from ''
// import card6 from ''
// import card7 from ''
// import card8 from ''
// import card9 from ''
// import card10 from ''
// import card11 from ''
// import card12 from ''
// import card13 from ''
// import card14 from ''
// import card15 from ''
//
// //hero images
// import avatar from ''
// import image1 from ''
// import image2 from ''
//
// const Medusa = ({state}) => {
//     const [showCards, setShowCards] = useState(false)
//     const handleToggleCards = () => {
//         setShowCards(!showCards);
//     }
//
//     let imgUrls = [avatar, image1, image2]
//
//     const myStyle = {
//         backgroundColor: state.backgroundColor,
//         height: '100%'
//     };
//     const navigate = useNavigate()
//
//     function handleClick() {
//         navigate(`/${state.companionRoute}`);
//     }
//
//     return (<div style={myStyle} className={s.content}>
//
//             <div className={s.header}>
//                 <h1>{state.heroName}</h1>
//             </div>
//             <div className={s.wrapper}>
//                 <div className={s.middleSide}>
//                     <p className={s.firstWord}>Companion:</p>
//                     <p><span className={s.firstWord}> Name:</span> {state.companionName}</p>
//                     <p><span className={s.firstWord}> Range:</span> {state.companionRange}</p>
//                     <p><span className={s.firstWord}> Start health:</span> {state.companionHealth}</p>
//
//                     {/*Companion button will be later*/}
//
//                     {/*<button className={s.companionButton} onClick={handleClick}>More about companion*/}
//                     {/*</button>*/}
//                 </div>
//
//                 <div className={s.leftSidePartOne}>
//                     <p><span className={s.firstWord}> Name:</span> {state.heroName}</p>
//                     <p><span className={s.firstWord}> Range:</span> {state.heroRange}</p>
//                     <p><span className={s.firstWord}> Start health:</span> {state.heroHealth}</p>
//                     <p><span className={s.firstWord}> Movement:</span> {state.movement}</p>
//                     <p><span className={s.firstWord}>Origin:</span> {state.origin}</p>
//                 </div>
//                 <div className={s.leftSidePartTwo}>
//                     <div className={s.fanStatsHeader}><h3>Non official stats:</h3></div>
//                     <p><span className={s.firstWord}>Attack:</span> {state.attack}</p>
//                     <p><span className={s.firstWord}>Survivability:</span> {state.survivability}</p>
//                     <p><span className={s.firstWord}>Difficulty:</span> {state.difficulty}</p>
//                 </div>
//
//                 <div className={s.rightSide}>
//                     <div className={s.imageSlider}>
//                         <ImageSlider imgUrls={imgUrls}/>
//                     </div>
//                     <div>
//                         <p className={s.quote}>{state.heroQuote}</p>
//                     </div>
//                 </div>
//                 <div className={s.downSide}>
//                     <div className={s.header}>
//                         <h2>Hero's traits</h2>
//                     </div>
//                     <p>{state.heroTrait}</p>
//
//                     <div className={s.header}>
//                         <h2>Tactics</h2>
//                     </div>
//                     <p>{state.tactics}  </p>
//                     <div className={s.header}>
//                         <h2>Description</h2>
//                     </div>
//                     <p> {state.description}  </p>
//                 </div>
//             </div>
//
//             <div>
//                 <div className={s.header}>
//                     <h2>Hero's cards</h2>
//                 </div>
//                 <div className={s.showCardsButton} onClick={handleToggleCards}>
//                     <h3>Click to show</h3>
//                 </div>
//             </div>
//             <br/>
//             <div className={`cards-wrapper ${showCards ? 'active' : ''}`}>
//
//                 <div className={s.cards}>
//                     <img src={card1} alt="none"/>
//                     <img src={card2} alt="none"/>
//                     <img src={card3} alt="none"/>
//                     <img src={card4} alt="none"/>
//                     <img src={card5} alt="none"/>
//                     <img src={card6} alt="none"/>
//                     <img src={card7} alt="none"/>
//                     <img src={card8} alt="none"/>
//                     <img src={card9} alt="none"/>
//                     <img src={card10} alt="none"/>
//                     <img src={card11} alt="none"/>
//                     <img src={card12} alt="none"/>
//                     <img src={card13} alt="none"/>
//                     <img src={card14} alt="none"/>
//                     <img src={card15} alt="none"/>
//
//                 </div>
//             </div>
//         </div>
//     )
//
// }
//
// export default Medusa
