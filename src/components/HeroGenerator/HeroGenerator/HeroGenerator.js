import {useState} from "react";

const HeroGenerator = (props) => {
    const randomHero = () => {
        console.log(props.heroesArr)
        let random = Math.floor(Math.random() * props.heroesArr.length);
        return props.heroesArr[random];

    };


    const generatedHero = () => {
        props.setHero(randomHero())
    }
    return (<div>
        <div>
            <button onClick={generatedHero}>Generate</button>
        </div>



        <br/>
        <br/>
    </div>)
}

export default HeroGenerator