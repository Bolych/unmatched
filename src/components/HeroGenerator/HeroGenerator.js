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


// function TextArea(props) {
//     const [visibleHeroes, setVisibleHeroes ] = useState('hi')
//
//
//     return (
//     return
//         <div>
//             <p>{props.heroesList}</p>
//         </div>
//     )
// }


let battleOfLegendsHeroes = ['Alice', 'Meduza', 'Sindbad', 'Arthur']
let cobbleAndFogHeroes = ['Jackile', 'Scherlock', 'Drakula', 'Invisible']
let robinHoodAndBigfootHeroes = ['Robin', 'Bigfoot']

let heroes = ['Alice', 'Meduza', 'Sindbad', 'Arthur', 'Robin', 'Bigfoot', 'Red hood', 'Beowulf', 'Jackile', 'Scherlock', 'Drakula', 'Invisible']

let heroesArr = ['sukad']


// trying checkbox in usestate


const HeroesWindow = (props) => {
    const [heroesWindow, setHeroesWindow] = useState('pustoe okno')

    function newWindow() {
        setHeroesWindow(props.input)
    }


    return (<div>
        <p>{heroesWindow}</p>
        <p></p>
    </div>)
}


const AddExpansionElement = (props) => {
    const [visibleHeroes, setVisibleHeroes] = useState('zero heroes')

    function addHeroesToArr() {
        heroesArr.push(...props.expansionPack)
        console.log(heroesArr)

    }

    const addExpansion = () => {
        setVisibleHeroes(addHeroesToArr)
    }

    return (
        <div>
            <div>
                <button onClick={addExpansion}>{props.name}</button>
            </div>
            <div><p>fff</p></div>
            <div>

                <p>{visibleHeroes}</p>
            </div>
            {/*<div>*/}
            {/*    <button onClick={reset}>reset</button>*/}
            {/*</div>*/}
            <br/>
            <br/>
        </div>
    );
}


const ResetButton = (props) => {
    const [reset, setReset] = useState('zero')

    const resetWindow = () => {
        setReset(heroesArr = [' '])
        console.log(heroesArr)
    }

    return <div>

        <button onClick={resetWindow}>Reset</button>
    </div>
}


// Generate Hero Function
const randomHero = () => {
    console.log(heroesArr)
    let random = Math.floor(Math.random() * heroesArr.length);
    return heroesArr[random];

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
    </div>
}


const HeroGeneratorPage = () => {
    console.log(heroesArr)
    return (
        <div>
            <div>
                <HeroesWindow input={heroesArr.toString()}/>
            </div>
            <HeroGenerator/>
            <div>
                <div><AddExpansionElement name='Battle of Legends vol.1' expansionPack={battleOfLegendsHeroes}/></div>
                <div><AddExpansionElement name='Cobble And Fog' expansionPack={cobbleAndFogHeroes}/></div>
                <div><AddExpansionElement name='Robin Hood and Bigfoot' expansionPack={robinHoodAndBigfootHeroes}/>
                </div>
            </div>

            <div><ResetButton/></div>

        </div>
    )


}


export default HeroGeneratorPage