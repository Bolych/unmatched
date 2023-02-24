import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


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
            heroLink: '/arthur',
            heroRange: 'melee',
            attack: "6-8",
            movement: '2',
            heroHealth: '18',
            survivability: "8",
            difficulty: '3',
            heroTrait: 'When King Arthur attacks, you may BOOST that attack. Play the BOOST card, face down, along with your attack card.\n' +
                'If your opponent cancels the effects on your attack card, the BOOST is discarded without effect. ',
            origin: 'Novel "King Arthur and knights of the Round Table". Author: Thomas Melory. ',
            description: "King Arthur is a legendary British leader who, according to medieval histories and romances, led the defence of Britain against Saxon invaders in the late 5th and early 6th centuries AD. The details of Arthur's story are mainly composed of folklore and literary invention, and his historical existence is debated and disputed by modern historians.\n  However, the legend of King Arthur has endured for centuries and has become an important part of British and world mythology. According to the legends, Arthur was born to King Uther Pendragon and Igraine, and was raised in secret by the wizard Merlin. He later pulled the sword Excalibur from a stone, proving his right to rule as king. With the help of his knights of the Round Table, Arthur fought and defeated many enemies, including the Saxon invaders and his own traitorous nephew Mordred.\n  Despite his many successes, Arthur was eventually mortally wounded in battle and taken to the mystical island of Avalon, where he is said to rest until the day he will return to save Britain once again.",
            tactics: 'Collect cards and use them on attack enhancement. Arthur is straightforward and for experienced players it is usually not hard to counter Arthur.',
            heroQuote: '“I was never your father nor of your blood, but I wote well ye are of an higher blood than I wend ye were".',
            // style:
            backgroundColor: '#e8ccc6',
            heroAvatar: 'https://cdn.britannica.com/79/147179-050-14CCB8B7/King-Arthur-illustration-NC-title-page-Wyeth.jpg',
            img2: 'https://i.guim.co.uk/img/media/5013247222200a73e1d4b6df6e7860b968570ae4/0_619_2126_1275/master/2126.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=008a11fa8afd5a2b3dcad30c1f78b732',
            img3: 'https://www.rabbies.com/application/files/3315/3017/8666/Holy-grail-round-table-bnf-ms_fr-116F-f610v-15th-detail.jpg',
            // companion:
            companionName: 'Merlin',
            companionRange: 'ranged',
            companionRoute: 'merlin',
            companionHealth: '7'
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
            elo: 1950,
            heroName: 'Alice',
            heroLink: '/alice',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '13',
            heroTrait: 'When you place Alice, choose whether she starts the game BIG or SMALL.\n' +
                'When Alice is BIG, add 2 to the value of her attack cards.\n' +
                'When Alice is SMALL, add 1 to the value of her defense cards.',
            origin: ' Novel "Alice in wonderland". Author: Lewis Carroll',
            description: "Lena Osipova is the best",
            tactics: 'Collect cards and use them on attack enhancement. Arthur is straightforward and for experienced players it is usually not hard to counter Arthur.',
            heroQuote: '“We\'re all mad here".',
            // style:
            backgroundColor: 'lightblue',
           heroAvatar: 'https://bloody-disgusting.com/wp-content/uploads/2022/01/Alice-Madness-Returns-1280x720-1.jpeg',
           img2: 'https://cdn.vox-cdn.com/thumbor/s6IzDkkjcSnf4Tszl26U10KYNcg=/480x0/cdn.vox-cdn.com/uploads/chorus_asset/file/18842376/UM_BoLv1_card_back_Alice.png',
            img3: 'https://preview.redd.it/my-take-on-alice-v0-5awtznqqvt191.jpg?width=640&crop=smart&auto=webp&s=d5397d52ffe0fc0d9c98ad14366856309546a82c',
            //fan stats:
            attack: "7-9",
            survivability: "5",
            difficulty: '7',
            // companion:
            companionName: 'The Jabberwock',
            companionRange: 'melee',
            companionRoute: 'jabberwock',
            companionHealth: '8'
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
      heroLink: '/medusa',
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


let [, arthur, , , alice, , , medusa, , , sinbad, , , dracula, , , invisible, , , jackile, , , sherlock, , , beowulf, , , redHood, , , bigfoot, , , robinHood, , , sattler, , , ingen, , , raptors, , , trex, , , achilles, bloodyMary, sunWukong, yennenga] = heroesArr;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='wrapper'>
            <App heroesArr={heroesArr} arthur={arthur} alice={alice} medusa={medusa} sinbad={sinbad} dracula={dracula}
                 invisible={invisible}
                 jackile={jackile} sherlock={sherlock} beowulf={beowulf} redhood={redHood} bigfoot={bigfoot}
                 robinhood={robinHood}/>
        </div>

    </BrowserRouter>
);

