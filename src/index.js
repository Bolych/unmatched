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
            heroName: 'Arthur(novice)'
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
            overallPower: '6',
            heroTrait: 'When King Arthur attacks, you may BOOST that attack. Play the BOOST card, face down, along with your attack card.\n' +
                'If your opponent cancels the effects on your attack card, the BOOST is discarded without effect. ',
            origin: 'Novel "King Arthur and knights of the Round Table". Author: Thomas Melory. ',
            description: "King Arthur is a legendary British leader who, according to medieval histories and romances, led the defence of Britain against Saxon invaders in the late 5th and early 6th centuries AD. The details of Arthur's story are mainly composed of folklore and literary invention, and his historical existence is debated and disputed by modern historians.\n  However, the legend of King Arthur has endured for centuries and has become an important part of British and world mythology. According to the legends, Arthur was born to King Uther Pendragon and Igraine, and was raised in secret by the wizard Merlin. He later pulled the sword Excalibur from a stone, proving his right to rule as king. With the help of his knights of the Round Table, Arthur fought and defeated many enemies, including the Saxon invaders and his own traitorous nephew Mordred.\n  Despite his many successes, Arthur was eventually mortally wounded in battle and taken to the mystical island of Avalon, where he is said to rest until the day he will return to save Britain once again.",
            tactics: 'Collect cards and use them on attack enhancement. Arthur is straightforward and for experienced players it is usually not hard to counter Arthur.',
            heroQuote: '“I was never your father nor of your blood, but I wote well ye are of an higher blood than I wend ye were".',
            // style:
            backgroundColor: '#e8ccc6',
            headersBackgroundColor: '#d8b56b',
            fontColor: '',
            // companion:
            companionName: 'Merlin',
            companionRange: 'ranged',
            companionRoute: 'merlin',
            companionHealth: '7'
        },

        {
            id: 81,
            elo: 2080,
            heroName: 'Arthur(experienced)'
        },

        {
            id: 42,
            elo: 1830,
            heroName: 'Alice(novice)'
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
            description: "",
            tactics: 'Collect cards and use them on attack enhancement. Arthur is straightforward and for experienced players it is usually not hard to counter Arthur.',
            heroQuote: '“We\'re all mad here".',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "7-9",
            survivability: "5",
            difficulty: '7',
            overallPower: '7',
            // companion:
            companionName: 'The Jabberwock',
            companionRange: 'melee',
            companionRoute: 'jabberwock',
            companionHealth: '8'
        },

        {
            id: 82,
            elo: 2100,
            heroName: 'Alice(experienced)'
        },

        {
            id: 43,
            elo: 1945,
            heroName: 'Medusa(novice) '
        },

        {
            id: 3,
            elo: 2050,
            heroName: 'Medusa',
            heroLink: '/medusa',
            heroRange: 'melee',
            movement: '3',
            heroHealth: '16',
            heroTrait: 'At the start of your turn, you may deal 1 damage to an opposing fighter in Medusa\'s zone.',
            origin: 'Greek mythology. Tales of Perseus',
            description: "Medusa was once a beautiful woman who served as a priestess in the temple of Athena. However, she was seduced by Poseidon and they had a sexual encounter in the temple. Athena was angered by this and punished Medusa by turning her into a Gorgon.",
            tactics: 'Just go and win.',
            heroQuote: '“We\'re all mad here".',
            // style:
            backgroundColor: '#bee7ae',
            headersBackgroundColor: '#3D5169',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "8",
            survivability: "6",
            difficulty: '2',
            overallPower: '9,5',
            // companion:
            companionName: 'Harpies x3)',
            companionRange: 'melee',
            companionRoute: 'harpies',
            companionHealth: '1'

        },

        {
            id: 83,
            elo: 2200,
            heroName: 'Medusa(experienced)'
        },


        {
            id: 44,
            elo: 1970,
            heroName: 'Sinbad(novice)'
        },


        {
            id: 4,
            elo: 2010,
            heroName: 'Sinbad',
            heroLink: '/sinbad',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '15',
            heroTrait: 'When you maneuver, you may move your fighters +1 space for each VOYAGE card in your discard pile.',
            origin: 'Story-cycle of Middle Eastern. "One Thousand and One Nights" tales.',
            description: "Medusa was once a beautiful woman who served as a priestess in the temple of Athena. However, she was seduced by Poseidon and they had a sexual encounter in the temple. Athena was angered by this and punished Medusa by turning her into a Gorgon.",
            tactics: 'Be cunning first part of game and feed on wasted journey cards.',
            heroQuote: '"Give that guy a raise!".',
            // style:
            backgroundColor: '#e78e5a',
            headersBackgroundColor: '#3D5169',
            fontColor: '#e8ccc6',

            //fan stats:
            attack: "4 (at the beginning) - 9 (endgame)",
            survivability: "7",
            difficulty: '5',
            overallPower: '8',
            // companion:
            companionName: 'The Porter',
            companionRange: 'melee',
            companionRoute: 'porter',
            companionHealth: '6'
        },

        {
            id: 84,
            elo: 2100,
            heroName: 'Sinbad(experienced)'
        },


        {
            id: 49,
            elo: 2010,
            heroName: 'Sherlock(experienced)'
        },

        {
            id: 9,
            elo: 2010,
            heroName: 'Bruce Lee',
            heroLink: '/bruce-lee',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '14',
            heroTrait: 'At the end of your turn, you may move Bruce Lee 1 space.',
            origin: 'Bruce Lee.',
            description: "Martial artist, actor.",
            tactics: 'K.O.',
            heroQuote: '“Do not pray for an easy life, pray for the strength to endure a difficult one.”',
            // style:
            backgroundColor: ' #ccc167',
            headersBackgroundColor: '#54137a',
            fontColor: '#e8ccc6',

            //fan stats:
            attack: "8,5",
            survivability: "5",
            difficulty: '7',
            overallPower: '7',
            // companion:
            companionName: 'None',

        },

        {
            id: 89,
            elo: 2010,
            heroName: 'Bruce Lee(experienced)'
        },


        {
            id: 50,
            elo: 1950,
            heroName: 'Bigfoot(novice)'
        },

        {
            id: 2,
            elo: 1950,
            heroName: 'Bigfoot',
            heroLink: '/bigfoot',
            heroRange: 'melee',
            movement: '3',
            heroHealth: '16',
            heroTrait: 'At the end of your turn, if there are no opposing fighters in Bigfoot\'s zone, you may draw 1 card.',
            origin: '"City Legends"',
            description: "",
            tactics: 'Collect cards and use them on attack enhancement. Arthur is straightforward and for experienced players it is usually not hard to counter Arthur.',
            heroQuote: '"Do they exist? (about people)".',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "8",
            survivability: "6",
            difficulty: '3',
            overallPower: '8,5',
            // companion:
            companionName: 'The Jackalope',
            companionRange: 'melee',
            companionRoute: 'jackalope',
            companionHealth: '6'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Bigfoot (experienced)'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Robin Hood (novice)'
        },

        {
            id: 2,
            elo: 1950,
            heroName: 'Robin Hood',
            heroLink: '/robin-hood',
            heroRange: 'ranged',
            movement: '2',
            heroHealth: '13',
            heroTrait: 'At the start of your turn, you may place a trap. Whenever one of your traps is returned to the box, draw a card. Muldoon starts with 8 traps.',
            origin: 'English folklore',
            description: "Robin Hood",
            tactics: 'Collect cards and use them on attack enhancement. Arthur is straightforward and for experienced players it is usually not hard to counter Arthur.',
            heroQuote: '"Robin Hood".',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "7",
            survivability: "5",
            difficulty: '6',
            overallPower: '6,5',
            // companion:
            companionName: 'Outlaws x4',
            companionRange: 'melee',
            companionRoute: 'outlaws',
            companionHealth: '1'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Robin Hood(experienced)'
        },


        {
            id: 50,
            elo: 1950,
            heroName: 'Ingen(novice)'
        },

        {
            id: 2,
            elo: 1950,
            heroName: 'Robert Muldoon',
            heroLink: '/ingen',
            heroRange: 'ranged',
            movement: '3',
            heroHealth: '14',
            heroTrait: 'At the start of your turn, you may place a trap. Whenever one of your traps is returned to the box, draw a card. Muldoon starts with 8 traps.',
            origin: 'Movie "Jurassic Park"',
            description: "",
            tactics: 'Collect cards and use them on attack enhancement. Arthur is straightforward and for experienced players it is usually not hard to counter Arthur.',
            heroQuote: '“We\'re all mad here".',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "7-9",
            survivability: "5",
            difficulty: '7',
            overallPower: '6',
            // companion:
            companionName: 'Ingen workers x3',
            companionRange: 'ranged',
            companionRoute: 'workers',
            companionHealth: '3'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'InGen(experience)'
        },

        {
            id: 81,
            elo: 1950,
            heroName: 'Raptors(novice)'
        },

        {
            id: 2,
            elo: 1950,
            heroName: 'Raptors',
            heroLink: '/ingen',
            heroRange: 'ranged',
            movement: '3',
            heroHealth: '7 x3',
            heroTrait: 'Raptors add 1 to the value of their attack cards for each of your other Raptors adjacent to the\n' +
                'defender.',
            origin: 'Movie "Jurassic Park"',
            description: "Raptors",
            tactics: 'Be aggressive.',
            heroQuote: '"They\'re lethal at 8 months, and I do mean lethal." - Robert Muldoon.',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "7-9",
            survivability: "5",
            difficulty: '7',
            overallPower: '7,5',
            // companion:

        },
        {
            id: 50,
            elo: 1950,
            heroName: 'Raptors(experience)'
        },
        {
            id: 45,
            elo: 1900,
            heroName: 'Dracula(novice)'
        },

        {
            id: 5,
            elo: 2010,
            heroName: 'Dracula',
            heroLink: '/dracula',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '13',
            heroTrait: 'At the start of your turn, you may deal 1 damage to a fighter adjacent to Dracula. If you do, draw a card.',
            origin: 'Novel "Dracula". Author: Bram Stoker. Inspired by  inspired by 15th-century Romanian prince Vlad Tepes.',
            description: "Vlad Dracula, also known as Vlad the Impaler, was a 15th-century ruler of Wallachia known for his cruelty and use of impalement as punishment. He ruled Wallachia three times and was a skilled military leader who defended his country against the Ottoman Empire. Vlad is celebrated as a hero in Romania for his efforts to protect his people, but is also infamous for his brutality. He is often associated with the myth of vampires, which was popularized in Bram Stoker's novel \"Dracula\" but is not based on historical fact. Vlad Dracula remains a controversial and complex figure in Romanian history.",
            tactics: 'Dracula has very low life and defensive cards. Just smash your opponent at right moment.',
            heroQuote: '"Blood is the life ... and it shall be mine".',
            // style:
            backgroundColor: 'darkgrey',
            headersBackgroundColor: 'darkred',
            fontColor: '#e8ccc6',

            //fan stats:
            attack: "8,5",
            survivability: "4",
            difficulty: '7',
            overallPower: '7',
            // companion:
            companionName: 'The sisters x3',
            companionRange: 'melee',
            companionRoute: 'sisters',
            companionHealth: '1'
        },

        {
            id: 85,
            elo: 2105,
            heroName: 'Dracula(experienced)'
        },


        {
            id: 46,
            elo: 1830,
            heroName: 'Invisible(novice)'
        },

        {
            id: 6,
            elo: 2010,
            heroName: 'Invisible',
            heroLink: '/invisible',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '15',
            heroTrait: 'At the start of the game, after you place Invisible Man, place 3 fog tokens in separate spaces in his zone.\n' +
                '\n' +
                'When Invisible Man is on a space with a fog token, add 1 to the value of his defense cards.\n' +
                '\n' +
                'Invisible Man may move between two spaces with fog tokens as if they were adjacent.',
            origin: 'Novel "The Invisible Man". Author: H.G. Wells.',
            description: "The Invisible Man is a science fiction novel by H.G. Wells. The story follows Griffin, a scientist who has discovered the secret of invisibility but is unable to reverse the process. He becomes an outcast, isolated from society and consumed by his own power. Griffin struggles with the consequences of his actions, including the inability to interact with others and the temptation to use his power for personal gain. As the novel progresses, Griffin becomes increasingly unstable and violent, leading to a dramatic and tragic conclusion. The Invisible Man is a commentary on the dangers of unchecked scientific progress and the isolation and alienation that can result from pursuing knowledge at any cost.",
            tactics: 'Hit and run.',
            heroQuote: '""The fact is, I\'m all here:head, hands, legs, and all the rest of it, but it happens I\'m invisible. It\'s a confounded nuisance, but I am.".',
            // style:
            backgroundColor: 'lightgrey',
            headersBackgroundColor: 'darkgrey',
            fontColor: '#e8ccc6',

            //fan stats:
            attack: "4",
            survivability: "5 (9 if you don't want to fight) ",
            difficulty: '8',
            overallPower: '5',
            // companion:
            companionName: 'None',

        },
        {
            id: 86,
            elo: 2090,
            heroName: 'Invisible(experienced)'
        },
        {
            id: 47,
            elo: 1880,
            heroName: 'Jekyll and Hyde(novice)'
        },

        {
            id: 7,
            elo: 2010,
            heroName: 'Jekyll and Hide',
            heroLink: '/jekyll',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '16',
            heroTrait: 'Start the game as Dr. Jekyll. At the start of your turn, you may transform into Dr. Jekyll or Mr. Hyde.\n' +
                'While Mr. Hyde: After you Maneuver, take 1 damage.\n' +
                'Use the transformation token to indicate what he currently is.',
            origin: 'Novel "Strange Case of Dr Jekyll and Mr Hyde". Author: Robert Louis Stevenson.',
            description: "Dr. Jekyll and Mr. Hyde is a novella by Robert Louis Stevenson. The story follows Dr. Henry Jekyll, a respected London doctor who experiments with a potion that transforms him into his evil alter-ego, Mr. Edward Hyde. Jekyll is a mild-mannered man with a good reputation, while Hyde is a violent and malevolent persona who commits horrific acts. As the story progresses, Jekyll struggles to control his transformations and ultimately succumbs to the power of Hyde. The tale is a psychological exploration of the duality of human nature and the consequences of repression and desire.",
            tactics: 'Predict the right time to change your form.',
            heroQuote: '“You must suffer me to go my own dark way.”',
            // style:
            backgroundColor: 'darkgrey',
            headersBackgroundColor: 'darkgreen',
            fontColor: '#e8ccc6',

            //fan stats:
            attack: "8",
            survivability: "5",
            difficulty: '8',
            overallPower: '6',
            // companion:
            companionName: 'None',

        },
        {
            id: 87,
            elo: 2070,
            heroName: 'Jackile and Hide(experienced)'
        },

        {
            id: 48,
            elo: 1950,
            heroName: 'Sherlock(novice)'
        },

        {
            id: 8,
            elo: 2010,
            heroName: 'Sherlock Holmes',
            heroLink: '/sherlock',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '16',
            heroTrait: 'Effects on HOLMES and DR. WATSON cards cannot be cancelled by an opponent.\n' +
                '(Effects on ANY cards can be cancelled.)',
            origin: 'Novels about Sherlock Holmes. Author: Arthur Conan Doyle.',
            description: "Sherlock Holmes is a fictional detective created by Sir Arthur Conan Doyle. He is known for his exceptional powers of observation, deduction, and reasoning, which he uses to solve complex cases. Holmes has a tall, lean build and piercing grey eyes. He wears a deerstalker hat and an Inverness cape, which have become iconic elements of his appearance. Holmes has a cool and detached demeanor, often expressing a lack of interest in the social niceties of Victorian society. He is a master of disguises and has a deep knowledge of chemistry, anatomy, and other sciences, which he employs in his investigations.",
            tactics: 'Go and win.',
            heroQuote: '“There is nothing more deceptive than an obvious fact”.',
            // style:
            backgroundColor: 'lightgrey',
            headersBackgroundColor: '#c1c454',
            fontColor: '',

            //fan stats:
            attack: "7",
            survivability: "7",
            difficulty: '5',
            overallPower: '9',
            // companion:
            companionName: 'Dr. Watson',
            companionRange: 'melee',
            companionRoute: '/watson',
            companionHealth: '8'
        },


        {
            id: 88,
            elo: 2010,
            heroName: 'Sherlock(experienced)'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Angel(novice)'
        },

        {
            id: 2,
            elo: 1950,
            heroName: 'Angel',
            heroLink: '/angel',
            heroRange: 'melee',
            movement: '3',
            heroHealth: '14',
            heroTrait: 'After Angel or Faith attacks, if you lost the combat, draw 1 card.',
            origin: 'TV show "Buffy the vampire slayer"',
            description: "",
            tactics: 'Angel.',
            heroQuote: '“quote for angel."',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "5",
            survivability: "5",
            difficulty: '5',
            overallPower: '3',
            // companion:
            companionName: 'Faith',
            companionRange: 'melee',
            companionRoute: '/faith',
            companionHealth: '8'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Angel(experienced)'
        },


        {
            id: 50,
            elo: 1950,
            heroName: 'Buffy(novice)'
        },

        {
            id: 2,
            elo: 1950,
            heroName: 'Buffy',
            heroLink: '/buffy',
            heroRange: 'ranged',
            movement: '3',
            heroHealth: '14',
            heroTrait: 'Buffy may move through spaces containing opposing fighters (including when she is moved by effects).',
            origin: 'TV show "Buffy the vampire slayer"',
            description: "",
            tactics: 'Buffu.',
            heroQuote: '“quote for buffy".',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "5",
            survivability: "5",
            difficulty: '5',
            overallPower: '3',
            // companion:
            companionName: 'Giles or Xander',
            companionRange: 'melee',
            companionRoute: 'giles-or-xander',
            companionHealth: '6'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Buffy(experienced)'
        },


        {
            id: 50,
            elo: 1950,
            heroName: 'Spike(novice)'
        },

        {
            id: 2,
            elo: 1950,
            heroName: 'Spike',
            heroLink: '/spike',
            heroRange: 'ranged',
            movement: '2',
            heroHealth: '15',
            heroTrait: 'At the start of your turn, you may place a Shadow token in any space adjacent to Spike or Drusilla.',
            origin: 'TV show "Buffy the vampire slayer"',
            description: "",
            tactics: 'spike.',
            heroQuote: '“quote for spike".',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "5",
            survivability: "5",
            difficulty: '5',
            overallPower: '4',
            // companion:
            companionName: 'Drusila',
            companionRange: 'melee',
            companionRoute: '/drusila',
            companionHealth: '7'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Spike(experienced)'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Willow(novice)'
        },

        {
            id: 2,
            elo: 1950,
            heroName: 'Willow',
            heroLink: '/willow',
            heroRange: 'ranged',
            movement: '2',
            heroHealth: '14',
            heroTrait: 'When Willow or Tara is dealt damage, Willow becomes Dark Willow.\n' +
                '\n' +
                'At the end of your turn, if Dark Willow is adjacent to Tara, she becomes Willow.',
            origin: 'TV show "Buffy the vampire slayer"',
            description: "",
            tactics: 'Buffu.',
            heroQuote: '“quote for buffy".',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "5",
            survivability: "5",
            difficulty: '5',
            overallPower: '3',
            // companion:
            companionName: 'Tara',
            companionRange: 'rangen',
            companionRoute: 'tara',
            companionHealth: '6'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Willow(experienced)'
        },



        {
            id: 50,
            elo: 1950,
            heroName: 'Buffy(novice)'
        },

        {
            id: 2,
            elo: 1950,
            heroName: 'Bigfoot',
            heroLink: '/bigfoot',
            heroRange: 'ranged',
            movement: '3',
            heroHealth: '14',
            heroTrait: 'Buffy may move through spaces containing opposing fighters (including when she is moved by effects).',
            origin: 'TV show "Buffy the vampire slayer"',
            description: "",
            tactics: 'Buffu.',
            heroQuote: '“quote for buffy".',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            attack: "5",
            survivability: "5",
            difficulty: '5',
            overallPower: '3',
            // companion:
            companionName: 'Giles or Xander',
            companionRange: 'melee',
            companionRoute: 'giles-or-xander',
            companionHealth: '6'
        },

        {
            id: 50,
            elo: 1950,
            heroName: 'Buffy(experienced)'
        },






        {
            id: 9,
            elo: 2000,
            heroName: 'Beowulf',
            power: "8",
            difficulty: 6,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 89,
            elo: 2100,
            heroName: 'Beowulf(experienced)'
        },


        {
            id: 50,
            elo: 1940,
            heroName: 'Red Hood(novice)'
        },


        {
            id: 10,
            elo: 2010,
            heroName: 'Red Hood',
            power: "8",
            difficulty: 9,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 90,
            elo: 2150,
            heroName: 'Red Hood(experienced)'
        },

        {
            id: 51,
            elo: 1990,
            heroName: 'Bigfoot(novice)'
        },

        {
            id: 11,
            elo: 2025,
            heroName: 'Bigfoot',
            power: "9",
            difficulty: 2,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 91,
            elo: 2200,
            heroName: 'Bigfoot(experienced)'
        },

        {
            id: 52,
            elo: 1950,
            heroName: 'Robin Hood(novice)'
        },

        {
            id: 12,
            elo: 1995,
            heroName: 'Robin Hood',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 92,
            elo: 2140,
            heroName: 'Robin Hood(experienced)'
        },


        {
            id: 13,
            elo: 2000,
            heroName: 'Dr Sattler',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 14,
            elo: 2000,
            heroName: 'InGen',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 15,
            elo: 2000,
            heroName: 'Raptors',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 16,
            elo: 2000,
            heroName: 'T-rex',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },

        //Battle of Legends vol.2

        {
            id: 17,
            elo: 1995,
            heroName: 'Achilles',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 18,
            elo: 2020,
            heroName: 'Bloody Mary',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },

        {
            id: 19,
            elo: 2010,
            heroName: 'Sun Wukong',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },
        {
            id: 20,
            elo: 2005,
            heroName: 'Yennenga',
            power: "6",
            difficulty: 8,
            origin: 'Tale',
            tactics: "Puk"
        },


        // additional properties to heroes:


    ]

// export let heroesList = heroes.map(el => (
//     <Route key={el.id} path={el.pathName} element={el.componentName} heroName={el.heroName} power={el.power}
//            difficulty={el.difficulty} origin={el.origin} tactics={el.tactics}/>))


let [, arthur, , , alice, , , medusa, , , sinbad, , , bruceLee ,,, bigfoot, , , robinHood, , , dracula, , , invisible, , , jekyll, , ,  angel, , , buffy , , , spike , , , willow , , ,  sherlock, , , ingen, , , raptors, , , beowulf, , , redHood, , , sattler,, , ,  trex, , , achilles, bloodyMary, sunWukong, yennenga] = heroesArr;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='wrapper'>
            <App heroesArr={heroesArr} arthur={arthur} alice={alice} medusa={medusa} sinbad={sinbad} dracula={dracula}
                 invisible={invisible}
                 jekyll={jekyll} sherlock={sherlock} bruceLee={bruceLee} beowulf={beowulf} redhood={redHood} bigfoot={bigfoot}
                 robinhood={robinHood} ingen={ingen} raptors={raptors}
            angel={angel}/>
        </div>

    </BrowserRouter>
);

