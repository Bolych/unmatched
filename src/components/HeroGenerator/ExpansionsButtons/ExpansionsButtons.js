import ExpansionButton from "./ExpansionButton";
import {useState} from "react";




const ExpansionsButtons = (props) => {


    return (<div>
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Battle of Legends vol.1' expansionPack={props.battleOfLegendHeroes}/>
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Cobble And Fog' expansionPack={props.cobbleAndFogHeroes}/>
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Robin Hood and Bigfoot' expansionPack={props.robinHoodAndBigfootHeroes} />
<ExpansionButton visibleHeroes={props.visibleHeroes} setVisibleHeroes={props.setVisibleHeroes} heroesArr={props.heroesArr} name='Red Hood and Beowulf' expansionPack={props.redHoodAndBeowulfHeroes} />
    </div>)

}

export default ExpansionsButtons