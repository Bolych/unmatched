import {useState} from "react";

const HeroGenerator = (props) => {
    const randomHero = () => {
        console.log(props.heroesArr)
        let random = Math.floor(Math.random() * props.heroesArr.length);
        return props.heroesArr[random];

    };

    const [hero, setHero] = useState('')
    const generatedHero = () => {
        setHero(randomHero())
    }
    return (<div>
        <div>
            <button onClick={generatedHero}>generate</button>
        </div>


        <div>Your hero is: {hero}</div>
        <br/>
        <br/>
        <br/>
    </div>)
}

export default HeroGenerator