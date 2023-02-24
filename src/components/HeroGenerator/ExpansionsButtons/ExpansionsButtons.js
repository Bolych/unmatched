import ExpansionButton from "./ExpansionButton";
import s from './ExpansionButtons.module.css'




const ExpansionsButtons = (props) => {


    return (<div className={s.content} >
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Battle of Legends vol.1' expansionPack={props.battleOfLegendHeroes}/>
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Cobble And Fog' expansionPack={props.cobbleAndFogHeroes}/>
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Robin Hood and Bigfoot' expansionPack={props.robinHoodAndBigfootHeroes} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Red Hood and Beowulf' expansionPack={props.redHoodAndBeowulfHeroes} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Battle of Legends vol.2' expansionPack={props.battleoFLegendsVolTwoHeroes} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name="Marvel's Redemption Row" expansionPack={props.redemptionRowHeroes} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name="Marvel's Hells Kitchen" expansionPack={props.marvelHellKitchen} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name="Marvel's Teen Spirit" expansionPack={props. marvelTeenSpirit} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name="Marvel's For King and Country" expansionPack={props.marvelForKingAndCountry} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Ingen and Raptors' expansionPack={props.jurassicParkRaptorHeroes} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Dr. Sattler and T-rex' expansionPack={props.jurassicParkTrexHeroes} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Houdini and Genie' expansionPack={props.houdiniAndGenie} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Bruce Lee' expansionPack={props.bruceLee} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Deadpool' expansionPack={props.deadpool} />


    </div>)

}

export default ExpansionsButtons