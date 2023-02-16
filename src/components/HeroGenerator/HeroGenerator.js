import {useEffect, useRef, useState} from "react";


// let heroes = [ 'Alice', 'Meduza', 'Sindbad', 'Arthur', 'Robin', 'Bigfoot', 'Red hood', 'Beowulf', 'Jackile', 'Scherlock', 'Drakula', 'Invisible']
//
// function randomHero () {
//     let random = Math.floor(Math.random() * heroes.length);
//     result.innerText = heroes[random];
//
// };
//

// Checkbox

let battleOfLegendsHeroes = ['Alice', 'Meduza', 'Sindbad', 'Arthur']
let cobbleAndFogHeroes = ['Jackile', 'Scherlock', 'Drakula', 'Invisible']
let robinHoodAndBigfootHeroes = ['Robin', 'Bigfoot']

let heroes = [ 'Alice', 'Meduza', 'Sindbad', 'Arthur', 'Robin', 'Bigfoot', 'Red hood', 'Beowulf', 'Jackile', 'Scherlock', 'Drakula', 'Invisible']

let heroesArr = []


// trying checkbox in usestate

const Checkbox = (props) => {

    let [checked, setChecked] = useState(false);
    heroesArr.flat()
    const handleChange = (e) => {
        if (e.target.checked === true) {
            console.log(checked)
            heroesArr.push(props.expansionPack)
            console.log(heroesArr)
        }

           // if (e.target.checked === false)
     if (e.target.checked === false)

         {
             heroesArr.splice( heroesArr.length -1)
      //       let toRemove = [props.expansionPack]
      // let newArr =     heroesArr.splice((el) => !toRemove.includes(el));

             console.log(heroesArr)
            }


        setChecked(e => !e);
    };

    return (
        <div>
            <label>
                <p>{props.name}</p>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
                My Value
            </label>

            <p> {checked.toString()}</p>
        </div>
    );
}






// Generate Hero Function
function randomHero () {


console.log(heroesArr)
    let random = Math.floor(Math.random() * heroesArr.length);
    let result = heroesArr[random];
    return result
};





const HeroGenerator = () => {



    const [hero, setHero] = useState('who is your hero?')
const generatedHero = () => {

        setHero(randomHero())
}
    return <div>


        <div>
            <button onClick={generatedHero}>generate</button>
        </div>
        <div>{hero}</div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div><Checkbox name='BoL' expansionPack="'Alice', 'Meduza', 'Sindbad', 'Arthur'"/></div>
        <div><Checkbox name='Cobble And Fog' expansionPack="'Jackile', 'Scherlock', 'Drakula', 'Invisible'"/></div>
        <div><Checkbox name='Robin Hood' expansionPack="'Robin', 'Bigfoot'"/></div>
    </div>
}

export default HeroGenerator