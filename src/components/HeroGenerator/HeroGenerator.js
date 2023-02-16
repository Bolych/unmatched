import {useEffect, useRef, useState} from "react";


// let heroes = [ 'Alice', 'Meduza', 'Sindbad', 'Arthur', 'Robin', 'Bigfoot', 'Red hood', 'Beowulf', 'Jackile', 'Scherlock', 'Drakula', 'Invisible']
//
// function randomHero () {
//     let random = Math.floor(Math.random() * heroes.length);
//     result.innerText = heroes[random];
//
// };
//

let heroes = [ 'Alice', 'Meduza', 'Sindbad', 'Arthur', 'Robin', 'Bigfoot', 'Red hood', 'Beowulf', 'Jackile', 'Scherlock', 'Drakula', 'Invisible']

function randomHero () {
    let random = Math.floor(Math.random() * heroes.length);
    let result = heroes[random];
    return result
};





const HeroGenerator = () => {
    const [hero, setHero] = useState('who is your hero?')
const generatedHeroe = () => {
        setHero(randomHero())
}


    return <div>
        <div>
            <button onClick={generatedHeroe}>generate</button>
        </div>
        <div>{hero}</div>


    </div>
}

export default HeroGenerator