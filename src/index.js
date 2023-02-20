import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";



const heroesArr =
    [
        {
            id: 1,
            elo: 1950,
            name: 'Arthur',
            power: "7",
            difficulty: '3',
            origin: 'Novel King Arthur and knights of the Round Table. Author: Thomas Melory ',
            originDescription: 'Arthur is known by his great deeds',
            tactics: 'Collect cards and use them on attack enhancement'

        },

        {
            id: 41,
            elo: 2080,
            name: 'Arthur(experienced)'
        },

        {
            id: 81,
            elo: 1850,
            name: 'Arthur(novice)'
        },

        {
            id: 2,
            elo: 2000,
            name: 'Alice',
            power: "8",
            difficulty: 7,
            origin: 'Novel Alice in Wonderland. Author: Lewis Carroll',
            tactics: "predict Alica's size"

        },

        {
            id: 42,
            elo: 2100,
            name: 'Alice(experienced)'
        },

        {
            id: 82,
            elo: 1830,
            name: 'Alice(Novice)'
        },


        {
            id: 3,
            elo: 2030,
            pathName: '/medusa',
            componentName: "<Medusa/>",
            name: 'Medusa',
            power: "10",
            difficulty: 3,
            origin: 'Ancient Greek Myths',
            tactics: "Just go and win"

        },

        {
            id: 43,
            elo: 2200,
            name: 'Medusa(experienced)'
        },

        {
            id: 83,
            elo: 1945,
            name: 'Medusa(novice) '
        },

        {
            id: 4,
            elo: 2010,
            name: 'Sindbad',
            power: "8",
            difficulty: 6,
            origin: 'Tale',
            tactics: "Collect travel cards"

        },

        {
            id: 44,
            elo: 2100,
            name: 'Sindbad(experienced)'
        },

        {
            id: 84,
            elo: 1970,
            name: 'Sindbad(novice)'
        },

        {
            id: 5,
            elo: 1990,
            name: 'Dracula',
            power: "7",
            difficulty: 7,
            origin: 'Tale',
            tactics: "Puk"

        },

        {
            id: 45,
            elo: 2105,
            name: 'Dracula(experienced)'
        },

        {
            id: 85,
            elo: 1900,
            name: 'Dracula(novice)'
        },

        {
            id: 6,
            elo: 1960,
            name: 'Invisible',
            power: "4",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"

        },

        {
            id: 46,
            elo: 2090,
            name: 'Invisible(experienced)'
        },

        {
            id: 86,
            elo: 1830,
            name: 'Invisible(novice)'
        },

        {
            id: 7,
            elo: 1965,
            name: 'Jackile and Hide',
            power: "8",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"

        },
        {
            id: 47,
            elo: 2070,
            name: 'Jackile and Hide(experienced)'
        },

        {
            id: 87,
            elo: 1880,
            name: 'Jackile and Hide(novice)'
        },

        {
            id: 8,
            elo: 2020,
            name: 'Sherlock',
            power: "9",
            difficulty: 4,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 48,
            elo: 2010,
            name: 'Sherlock(experienced)'
        },

        {
            id: 88,
            elo: 1950,
            name: 'Sherlock(novice)'
        },


        {
            id: 9,
            elo: 2000,
            name: 'Beowulf',
            power: "8",
            difficulty: 6,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 49,
            elo: 2100,
            name: 'Beowulf(Experienced)'
        },

        {
            id: 89,
            elo: 1950,
            name: 'Beowulf(novice)'
        },



        {
            id: 10,
            elo: 2010,
            name: 'Red Hood',
            power: "8",
            difficulty: 9,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 50,
            elo: 2150,
            name: 'Red Hood(Experienced)'
        },

        {
            id: 90,
            elo: 1940,
            name: 'Red Hood(Novice)'
        },

        {
            id: 11,
            elo: 2025,
            name: 'Bigfoot',
            power: "9",
            difficulty: 2,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 51,
            elo: 2200,
            name: 'Bigfoot(Experienced)'
        },

        {
            id: 91,
            elo: 1990,
            name: 'Bigfoot(Novice)'
        },

        {
            id: 12,
            elo: 1995,
            name: 'Robin Hood',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 52,
            elo: 2140,
            name: 'Robin Hood(Experienced)'
        },

        {
            id: 92,
            elo: 1950,
            name: 'Robin Hood(Novice)'
        },

        {
            id: 13,
            elo: 2000,
            name: 'Dr Sattler',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 14,
            elo: 2000,
            name: 'InGen',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 15,
            elo: 2000,
            name: 'Raptors',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 16,
            elo: 2000,
            name: 'T-rex',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },

        //Battle of Legends vol.2



        {
            id: 17,
            elo: 2010,
            name: 'Sun Wukong',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 18,
            elo: 2005,
            name: 'Yennenga',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 19,
            elo: 2020,
            name: 'Bloody Mary',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 20,
            elo: 1995,
            name: 'Achilles',
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

    <BrowserRouter>

    <App heroesArr={heroesArr} arthur={arthur} alice={alice} medusa={medusa} sindbad={sindbad} dracula={dracula} invisible={invisible}
         jackile={jackile} sherlock={sherlock} beowulf={beowulf} redhood={redHood} bigfoot={bigfoot}
         robinhood={robinHood}/>
    </BrowserRouter>
);

