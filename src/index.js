import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import img2 from './images/decks/arthur/prophecy.png'

const heroesArr =
    [
        {
            id: 41,
            elo: 1850,
            name: 'Arthur(novice)'
        },
        {
            id: 1,
            elo: 1950,
            heroName: 'Arthur',
            heroLink: 'arthur',
            attack: "6-8",
            movement: '1',
            survivability: "8",
            difficulty: '3',
            origin: 'Novel King Arthur and knights of the Round Table. Author: Thomas Melory. ',
            description: 'Legendary King Arthur. He has wife Morgana and loyal friend Merlin. He was an exceptional man.',
            tactics: 'Collect cards and use them on attack enhancement. Arthur is straightforward and for experienced players it is usually not hard to counter Arthur.',
            // style:
            backgroundColor: '#e8ccc6',
            heroAvatar: 'https://cf.geekdo-images.com/IzwCo4vnGNw9UhtAgkmEBg__imagepage/img/xnG-xG1-qDF2zY2wweev3y4Kpig=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6685043.jpg',
       // companion:
            companionName: 'Merlin',
            companionRoute: 'merlin',

        },

        {
            id: 81,
            elo: 2080,
            name: 'Arthur(experienced)'
        },

        {
            id: 42,
            elo: 1830,
            name: 'Alice(novice)'
        },

        {
            id: 2,
            elo: 2000,
            name: 'Alice',
            attack: "5-9",
            survivability: "4-7",
            difficulty: 7,
            origin: 'Novel Alice in Wonderland. Author: Lewis Carroll',
            description: 'Alice, Alice... Now she is mature and tough',
            tactics: "Predict Alica's size no matter you are playing for her or against",
            backgroundColor: "#ADBFCD",
            avatar: "https://preview.redd.it/nmyqat7tjpc61.jpg?auto=webp&s=88f1b68bd6a93988b034d68aeedc1601f3e9bc83"

        },

        {
            id: 82,
            elo: 2100,
            name: 'Alice(experienced)'
        },

        {
            id: 43,
            elo: 1945,
            name: 'Medusa(novice) '
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
            id: 83,
            elo: 2200,
            name: 'Medusa(experienced)'
        },



        {
            id: 44,
            elo: 1970,
            name: 'Sinbad(novice)'
        },


        {
            id: 4,
            elo: 2010,
            name: 'Sinbad',
            power: "8",
            difficulty: 6,
            origin: 'Tale',
            tactics: "Collect travel cards"

        },

        {
            id: 84,
            elo: 2100,
            name: 'Sinbad(experienced)'
        },



        {
            id: 45,
            elo: 1900,
            name: 'Dracula(novice)'
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
            id: 85,
            elo: 2105,
            name: 'Dracula(experienced)'
        },



        {
            id: 46,
            elo: 1830,
            name: 'Invisible(novice)'
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
            id: 86,
            elo: 2090,
            name: 'Invisible(experienced)'
        },
        {
            id: 47,
            elo: 1880,
            name: 'Jackile and Hide(novice)'
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
            id: 87,
            elo: 2070,
            name: 'Jackile and Hide(experienced)'
        },

        {
            id: 48,
            elo: 1950,
            name: 'Sherlock(novice)'
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
            id: 88,
            elo: 2010,
            name: 'Sherlock(experienced)'
        },


        {
            id: 49,
            elo: 1950,
            name: 'Beowulf(novice)'
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
            id: 89,
            elo: 2100,
            name: 'Beowulf(experienced)'
        },


        {
            id: 50,
            elo: 1940,
            name: 'Red Hood(novice)'
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
            id: 90,
            elo: 2150,
            name: 'Red Hood(experienced)'
        },

        {
            id: 51,
            elo: 1990,
            name: 'Bigfoot(novice)'
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
            id: 91,
            elo: 2200,
            name: 'Bigfoot(experienced)'
        },

        {
            id: 52,
            elo: 1950,
            name: 'Robin Hood(novice)'
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
            id: 92,
            elo: 2140,
            name: 'Robin Hood(experienced)'
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
            elo: 1995,
            name: 'Achilles',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 18,
            elo: 2020,
            name: 'Bloody Mary',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 19,
            elo: 2010,
            name: 'Sun Wukong',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 20,
            elo: 2005,
            name: 'Yennenga',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },





        // additional properties to heroes:













    ]

// export let heroesList = heroes.map(el => (
//     <Route key={el.id} path={el.pathName} element={el.componentName} name={el.name} power={el.power}
//            difficulty={el.difficulty} origin={el.origin} tactics={el.tactics}/>))


let [,arthur,,,alice,,,medusa,,, sinbad,,, dracula,,, invisible,,, jackile,,, sherlock,,, beowulf,,, redHood,,, bigfoot,,, robinHood,,, sattler,,, ingen,,, raptors,,, trex,,, achilles, bloodyMary, sunWukong, yennenga] = heroesArr;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>

    <App heroesArr={heroesArr} arthur={arthur} alice={alice} medusa={medusa} sinbad={sinbad} dracula={dracula} invisible={invisible}
         jackile={jackile} sherlock={sherlock} beowulf={beowulf} redhood={redHood} bigfoot={bigfoot}
         robinhood={robinHood}/>
    </BrowserRouter>
);

