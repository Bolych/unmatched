import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Route} from "react-router-dom";
import Arthur from "./components/Heroes/BattleOfLegends/Arthur";


const heroesArr =
    [
        {
            id: 1,
            name: 'Arthur',
            power: "7",
            difficulty: '3',
            origin: 'Novel King Arthur and knights of the Round Table. Author: Thomas Melory ',
            originDescription: 'Arthur is known by his great deeds',
            tactics: 'Collect cards and use them on attack enhancement'

        },
        {
            id: 2,
            name: 'Alice',
            power: "8",
            difficulty: 7,
            origin: 'Novel Alice in Wonderland. Author: Lewis Carroll',
            tactics: "predict Alica's size"

        },
        {
            id: 3,
            pathName: '/medusa',
            componentName: "<Medusa/>",
            name: 'Medusa',
            power: "10",
            difficulty: 3,
            origin: 'Ancient Greek Myths',
            tactics: "Just go and win"

        },
        {
            id: 4,
            name: 'Sindbad',
            power: "8",
            difficulty: 6,
            origin: 'Tale',
            tactics: "Collect travel cards"

        },
        {
            id: 5,
            name: 'Dracula',
            power: "7",
            difficulty: 7,
            origin: 'Tale',
            tactics: "Puk"

        },
        {
            id: 6,
            name: 'Invisible',
            power: "4",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"

        },
        {
            id: 7,
            name: 'Jackile and Hide',
            power: "8",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"

        },
        {
            id: 8,
            name: 'Sherlock',
            power: "9",
            difficulty: 4,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 9,
            name: 'Beowulf',
            power: "8",
            difficulty: 6,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 10,
            name: 'Red Hood',
            power: "8",
            difficulty: 9,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 11,
            name: 'Bigfoot',
            power: "9",
            difficulty: 2,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 12,
            name: 'Robin Hood',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 13,
            name: 'Dr Sattler',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 14,
            name: 'InGen',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 15,
            name: 'Raptors',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 16,
            name: 'T-rex',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
    ]

// export let heroesList = heroes.map(el => (
//     <Route key={el.id} path={el.pathName} element={el.componentName} name={el.name} power={el.power}
//            difficulty={el.difficulty} origin={el.origin} tactics={el.tactics}/>))


let [arthur, alice, medusa, sindbad, dracula, invisible, jackile, sherlock, beowulf, redHood, bigfoot, robinHood] = heroesArr;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App arthur={arthur} alice={alice} medusa={medusa} sindbad={sindbad} dracula={dracula} invisible={invisible}
         jackile={jackile} sherlock={sherlock} beowulf={beowulf} redhood={redHood} bigfoot={bigfoot}
         robinhood={robinHood}/>
);

