import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const heroesArr =
    [
        {
            id: 101,
            elo: 1870,
            heroName: 'Arthur(novice)'
        },
        {
            id: 1,
            elo: 2030,
            heroName: 'Arthur',
            heroLink: '/arthur',
            heroRange: 'melee',

            movement: '2',
            heroHealth: '18',

            heroTrait: 'When King Arthur attacks, you may BOOST that attack. Play the BOOST card, face down, along with your attack card.\n' +
                'If your opponent cancels the effects on your attack card, the BOOST is discarded without effect. ',
            origin: 'Novel "King Arthur and knights of the Round Table". Author: Thomas Melory. ',
            description: "  King Arthur is a legendary British leader who, according to medieval histories and romances, led the defence of Britain against Saxon invaders in the late 5th and early 6th centuries AD. " +
                "The details of Arthur's story are mainly composed of folklore and literary invention, and his historical existence is debated and disputed by modern historians.\n" +
                "  According to the legends, Arthur was born to King Uther Pendragon and Igraine, and was raised in secret by the wizard Merlin. He later pulled the sword Excalibur from a stone, proving his right to rule as king. " +
                "\n  With the help of his Knights of the Round Table, Arthur fought and defeated many enemies, including the Saxon invaders and his traitorous nephew Mordred, but he himself was mortally wounded at the hands of the latter. The dying king was taken by boat to the Isle of Avalon. According to legend, Arthur slumbers on Avalon, waiting for the day of great need, when he will rise from his sleep to save Britain.",
            tactics: 'Collect cards and use them on attack enhancement. Arthur is straightforward and for experienced players it is usually not hard to counter Arthur.',
            heroQuote: '“I was never your father nor of your blood, but I wote well ye are of an higher blood than I wend ye were".',

            // fan stats:
            difficulty: '3',
            tier: 'D',
            overallPower: '6',

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
            id: 1001,
            elo: 2090,
            heroName: 'Arthur(experienced)'
        },

        {
            id: 102,
            elo: 1840,
            heroName: 'Alice(novice)'
        },

        {
            id: 2,
            elo: 2075,
            heroName: 'Alice',
            heroLink: '/alice',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '13',
            heroTrait: 'When you place Alice, choose whether she starts the game BIG or SMALL.\n' +
                'When Alice is BIG, add 2 to the value of her attack cards.\n' +
                'When Alice is SMALL, add 1 to the value of her defense cards.',
            origin: 'Novel "Alice in wonderland"(1865). Author: Lewis Carroll',
            description: "The character of Alice was inspired by the real-life Alice Liddell, a young girl who was a friend of Lewis Carroll. Fictional Alice is is known for her curious and adventurous spirit, as well as her ability to navigate the bizarre and unpredictable world of Wonderland. Throughout the story, Alice meets a variety of strange and eccentric characters.\n" +
                "Alice than appeared in multiple works of literature and media and her personality varies. In movies she is closer to original. In \"American McGee's Alice\" she is insane and Wonderland is just her imagination. In Unmatched Board game she is mature, strong and dangerous.",
            tactics: 'Control Alice\'s size, chose time when to defend and when to attack. Strong against: Daredevil. Weak against: Sun Wukong ',
            heroQuote: '“We\'re all mad here".',
            // style:
            backgroundColor: 'lightblue',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            difficulty: '7',
            tier: 'B',
            overallPower: '7',
            // companion:
            companionName: 'The Jabberwock',
            companionRange: 'melee',
            companionRoute: 'jabberwock',
            companionHealth: '8'
        },

        {
            id: 1002,
            elo: 2201,
            heroName: 'Alice(experienced)'
        },

        {
            id: 103,
            elo: 1950,
            heroName: 'Medusa(novice) '
        },

        {
            id: 3,
            elo: 2180,
            heroName: 'Medusa',
            heroLink: '/medusa',
            heroRange: 'melee',
            movement: '3',
            heroHealth: '16',
            heroTrait: 'At the start of your turn, you may deal 1 damage to an opposing fighter in Medusa\'s zone.',
            origin: 'Greek mythology. Tales of Perseus',
            description: "Medusa was once a beautiful woman who served as a priestess in the temple of Athena. However, she was seduced by Poseidon and they had a sexual encounter in the temple. Athena was angered by this and punished Medusa by turning her into a Gorgon.",
            tactics: 'One of the strongest characters. She can devastate any hero but have troubles with T-rex, Daredevil, Ghost Rider',
            heroQuote: '',
            // style:
            backgroundColor: '#bee7ae',
            headersBackgroundColor: '#3D5169',
            fontColor: '#e8ccc6',
            //fan stats:
            difficulty: '2',
            overallPower: '9,5',
            tier: 'S',
            // companion:
            companionName: 'Harpies x3)',
            companionRange: 'melee',
            companionRoute: 'harpies',
            companionHealth: '1'

        },

        {
            id: 1003,
            elo: 2286,
            heroName: 'Medusa(experienced)'
        },


        {
            id: 104,
            elo: 1915,
            heroName: 'Sinbad(novice)'
        },


        {
            id: 4,
            elo: 2100,
            heroName: 'Sinbad',
            heroLink: '/sinbad',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '15',
            heroTrait: 'When you maneuver, you may move your fighters +1 space for each VOYAGE card in your discard pile.',
            origin: 'Story-cycle of Middle Eastern. "One Thousand and One Nights" tales.',
            description: "Sindbad (also spelled Sinbad) is a legendary sailor and adventurer who appears in numerous tales from the Middle Eastern collection of stories known as the Thousand and One Nights, or Arabian Nights. Sindbad is depicted as a skilled seafarer who embarks on a series of voyages to far-flung lands, encountering all manner of mythical beasts, exotic locales, and treacherous foes along the way.",
            tactics: 'Collect Voyage cards, spend them on attack and be tricky before Sinbad will be strong enough. Strong against: Bruce Lee. Weak against: Sun Wukong.',
            heroQuote: '"Give that guy a raise!".',
            // style:
            backgroundColor: '#e78e5a',
            headersBackgroundColor: '#3D5169',
            fontColor: '#e8ccc6',

            //fan stats:
            difficulty: '5',
            overallPower: '6,8',
            tier: 'B',
            // companion:
            companionName: 'The Porter',
            companionRange: 'melee',
            companionRoute: 'porter',
            companionHealth: '6'
        },

        {
            id: 1004,
            elo: 2180,
            heroName: 'Sinbad(experienced)'
        },


        {
            id: 105,
            elo: 1840,
            heroName: 'Bruce Lee (novice)'
        },

        {
            id: 5,
            elo: 2035,
            heroName: 'Bruce Lee',
            heroLink: '/bruce-lee',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '14',
            heroTrait: 'At the end of your turn, you may move Bruce Lee 1 space.',
            origin: 'Real person',
            description: "Bruce Lee (1940-1973) was a martial artist, actor, filmmaker, and cultural icon.",
            tactics: 'Set up lethal chains of actions.  Weak against: characters who has lot of canceling cards, such as feint.',
            heroQuote: '“Do not pray for an easy life, pray for the strength to endure a difficult one.”',
            // style:
            backgroundColor: ' #ccc167',
            headersBackgroundColor: '#54137a',
            fontColor: '#e8ccc6',

            //fan stats:
            difficulty: '5',
            overallPower: '6,3',
            tier: 'C',
            // companion:
            companionName: 'None',

        },

        {
            id: 1005,
            elo: 2151,
            heroName: 'Bruce Lee(experienced)'
        },


        {
            id: 106,
            elo: 1940,
            heroName: 'Bigfoot(novice)'
        },

        {
            id: 6,
            elo: 2160,
            heroName: 'Bigfoot',
            heroLink: '/bigfoot',
            heroRange: 'melee',
            movement: '3',
            heroHealth: '16',
            heroTrait: 'At the end of your turn, if there are no opposing fighters in Bigfoot\'s zone, you may draw 1 card.',
            origin: '"City Legends"',
            description: "Bigfoot, also known as Sasquatch, is a legendary creature that is said to inhabit the forests of North America. It is described as a large, ape-like creature that stands at around 7 to 10 feet tall and has long, shaggy hair covering its body. Many sightings of Bigfoot have been reported over the years, but there is no concrete evidence to prove its existence. The legend of Bigfoot has become a popular cultural phenomenon, and has been featured in numerous books, movies, and TV shows. The search for Bigfoot continues to this day, with many people believing that the creature is real and waiting to be discovered.",
            tactics: '...',
            heroQuote: '',
            // style:
            backgroundColor: 'rgba(119,156,101,0.74)',
            headersBackgroundColor: '#A23921',
            fontColor: '#e8ccc6',
            //fan stats:
            difficulty: '3',
            overallPower: '8,5',
            tier: 'S',
            // companion:
            companionName: 'The Jackalope',
            companionRange: 'melee',
            companionRoute: 'jackalope',
            companionHealth: '6'
        },

        {
            id: 1006,
            elo: 2270,
            heroName: 'Bigfoot (experienced)'
        },

        {
            id: 107,
            elo: 1810,
            heroName: 'Robin Hood (novice)'
        },

        {
            id: 7,
            elo: 2025,
            heroName: 'Robin Hood',
            heroLink: '/robin-hood',
            heroRange: 'ranged',
            movement: '2',
            heroHealth: '13',
            heroTrait: 'At the start of your turn, you may place a trap. Whenever one of your traps is returned to the box, draw a card. Muldoon starts with 8 traps.',
            origin: 'English folklore',
            description: "Robin Hood is a legendary heroic outlaw from English folklore who is said to have lived during the reign of King Richard the Lionheart in the 12th century. He is often depicted as a skilled archer and swordsman who robbed from the rich to give to the poor. Robin Hood is said to have lived in Sherwood Forest with his band of Merry Men, which included characters such as Little John and Friar Tuck.",
            tactics: '...',
            heroQuote: '"“What is done is done; and the cracked egg cannot be cured.”',
            // style:
            backgroundColor: 'rgba(159,178,134,0.74)',
            headersBackgroundColor: '#698552',
            fontColor: '#e8ccc6',
            //fan stats:
            difficulty: '6',
            overallPower: '6',
            tier: 'C',
            // companion:
            companionName: 'Outlaws x4',
            companionRange: 'melee',
            companionRoute: 'outlaws',
            companionHealth: '1'
        },

        {
            id: 1007,
            elo: 2141,
            heroName: 'Robin Hood(experienced)'
        },


        {
            id: 108,
            elo: 1845,
            heroName: 'Ingen(novice)'
        },

        {
            id: 8,
            elo: 2065,
            heroName: 'Robert Muldoon',
            heroLink: '/ingen',
            heroRange: 'ranged',
            movement: '3',
            heroHealth: '14',
            heroTrait: 'At the start of your turn, you may place a trap. Whenever one of your traps is returned to the box, draw a card. Muldoon starts with 8 traps.',
            origin: 'Jurassic Park',
            description: "Robert Muldoon is a fictional character in Michael Crichton's 1990 novel \"Jurassic Park\" and Steven Spielberg's 1993 film adaptation of the same name. He is portrayed as the game warden and chief of security for the dinosaur park on Isla Nublar, responsible for overseeing the safety of both the park staff and visitors.\n" +
                "\n" +
                "Muldoon is depicted as a skilled and experienced hunter, with a deep respect for the animals under his care. He is known for his caution and skepticism about the safety of the park, often warning other characters of the dangers posed by the cloned dinosaurs. His most iconic moment comes when he explains the nature of Velociraptors to the other characters, and famously warns, \"Clever girl.\"\n" +
                "\n" +
                "In both the book and the film, Muldoon meets his demise when he is attacked and killed by a pack of Velociraptors while attempting to lead Dr. Ellie Sattler to safety. His character has become a fan favorite, known for his no-nonsense attitude and memorable one-liners.",
            tactics: '...',
            heroQuote: '“Clever girl.',
            // style:
            backgroundColor: 'rgba(204,179,136,0.74) ',
            headersBackgroundColor: '#7c4937',
            fontColor: '#e8ccc6',
            //fan stats:
            difficulty: '7',
            overallPower: '7',
            tier: 'B',
            // companion:
            companionName: 'Ingen workers x3',
            companionRange: 'ranged',
            companionRoute: 'workers',
            companionHealth: '3'
        },

        {
            id: 1008,
            elo: 2191,
            heroName: 'InGen(experienced)'
        },

        {
            id: 109,
            elo: 1870,
            heroName: 'Raptors(novice)'
        },

        {
            id: 9,
            elo: 2060,
            heroName: 'Raptors',
            heroLink: '/raptors',
            heroRange: 'ranged',
            movement: '3',
            heroHealth: '7 x3',
            heroTrait: 'Raptors add 1 to the value of their attack cards for each of your other Raptors adjacent to the\n' +
                'defender.',
            origin: 'Jurassic Park',
            description: "The Raptors, short for Velociraptors. They are depicted as highly intelligent, fast, and deadly predators that hunt in packs. In the first Jurassic Park film, they escape their containment and terrorize the human characters.",
            tactics: '...',
            heroQuote: '"They\'re lethal at 8 months, and I do mean lethal." - Robert Muldoon.',
            // style:
            backgroundColor: 'rgba(119,174,105,0.4)',
            headersBackgroundColor: '#77CA55',
            fontColor: '',
            //fan stats:
            difficulty: '5',
            overallPower: '6,5',
            tier: 'C',
            // companion:

        },
        {
            id: 1009,
            elo: 2160,
            heroName: 'Raptors(experienced)'
        },
        {
            id: 110,
            elo: 1865,
            heroName: 'Dracula(novice)'
        },

        {
            id: 10,
            elo: 2090,
            heroName: 'Dracula',
            heroLink: '/dracula',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '13',
            heroTrait: 'At the start of your turn, you may deal 1 damage to a fighter adjacent to Dracula. If you do, draw a card.',
            origin: 'Novel "Dracula". Author: Bram Stoker. Inspired by  inspired by 15th-century Romanian prince Vlad Tepes.',
            description: "Vlad Dracula, also known as Vlad the Impaler, was a 15th-century ruler of Wallachia known for his cruelty and use of impalement as punishment. He ruled Wallachia three times and was a skilled military leader who defended his country against the Ottoman Empire. Vlad is celebrated as a hero in Romania for his efforts to protect his people, but is also infamous for his brutality. He is often associated with the myth of vampires, which was popularized in Bram Stoker's novel \"Dracula\" but is not based on historical fact. Vlad Dracula remains a controversial and complex figure in Romanian history.",
            tactics: '...',
            heroQuote: '"Blood is the life ... and it shall be mine".',
            // style:
            backgroundColor: 'darkgrey',
            headersBackgroundColor: 'darkred',
            fontColor: '#e8ccc6',

            //fan stats:
            difficulty: '7',
            overallPower: '7',
            tier: 'A',
            // companion:
            companionName: 'The sisters x3',
            companionRange: 'melee',
            companionRoute: 'sisters',
            companionHealth: '1'
        },

        {
            id: 1010,
            elo: 2216,
            heroName: 'Dracula(experienced)'
        },


        {
            id: 111,
            elo: 1815,
            heroName: 'Invisible(novice)'
        },

        {
            id: 11,
            elo: 2000,
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
            description: "The Invisible Man is a science fiction novel by H.G. Wells. The story follows Griffin, a scientist who has discovered the secret of invisibility but is unable to reverse the process. He becomes an outcast, isolated from society and consumed by his own power. Griffin struggles with the consequences of his actions, including the inability to interact with others and the temptation to use his power for personal gain. As the novel progresses, Griffin becomes increasingly unstable and violent, leading to a dramatic and tragic conclusion.",
            tactics: '...',
            heroQuote: '""The fact is, I\'m all here:head, hands, legs, and all the rest of it, but it happens I\'m invisible. It\'s a confounded nuisance, but I am.".',
            // style:
            backgroundColor: 'lightgrey',
            headersBackgroundColor: 'darkgrey',
            fontColor: '#e8ccc6',

            //fan stats:
            difficulty: '8',
            overallPower: '5',
            tier: 'D',
            // companion:
            companionName: 'None',

        },
        {
            id: 1011,
            elo: 2111,
            heroName: 'Invisible(experienced)'
        },
        {
            id: 112,
            elo: 1790,
            heroName: 'Jekyll and Hyde(novice)'
        },

        {
            id: 12,
            elo: 2005,
            heroName: 'Jekyll and Hide',
            heroLink: '/jekyll',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '16',
            heroTrait: 'Start the game as Dr. Jekyll. At the start of your turn, you may transform into Dr. Jekyll or Mr. Hyde.\n' +
                'While Mr. Hyde: After you Maneuver, take 1 damage.\n' +
                'Use the transformation token to indicate what he currently is.',
            origin: 'Novel "Strange Case of Dr Jekyll and Mr Hyde". Author: Robert Louis Stevenson.',
            description: "Dr. Jekyll and Mr. Hyde is a novella by Robert Louis Stevenson. The story follows Dr. Henry Jekyll, a respected London doctor who experiments with a potion that transforms him into his evil alter-ego, Mr. Edward Hyde. Jekyll is a mild-mannered man with a good reputation, while Hyde is a violent and malevolent persona who commits horrific acts. As the story progresses, Jekyll struggles to control his transformations and ultimately succumbs to the power of Hyde.",
            tactics: '...',
            heroQuote: '“You must suffer me to go my own dark way.”',
            // style:
            backgroundColor: 'darkgrey',
            headersBackgroundColor: 'darkgreen',
            fontColor: '#e8ccc6',

            //fan stats:
            difficulty: '7',
            overallPower: '5',
            tier: 'E',
            // companion:
            companionName: 'None',

        },
        {
            id: 1012,
            elo: 2080,
            heroName: 'Jackile and Hide(experienced)'
        },

        {
            id: 113,
            elo: 1925,
            heroName: 'Sherlock(novice)'
        },

        {
            id: 13,
            elo: 2150,
            heroName: 'Sherlock Holmes',
            heroLink: '/sherlock',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '16',
            heroTrait: 'Effects on HOLMES and DR. WATSON cards cannot be cancelled by an opponent.\n' +
                '(Effects on ANY cards can be cancelled.)',
            origin: 'Novels about Sherlock Holmes. Author: Arthur Conan Doyle.',
            description: "Sherlock Holmes is a fictional detective created by Sir Arthur Conan Doyle. He is known for his exceptional powers of observation, deduction, and reasoning, which he uses to solve complex cases. Holmes has a tall, lean build and piercing grey eyes. He wears a deerstalker hat and an Inverness cape, which have become iconic elements of his appearance. Holmes has a cool and detached demeanor, often expressing a lack of interest in the social niceties of Victorian society. He is a master of disguises and has a deep knowledge of chemistry, anatomy, and other sciences, which he employs in his investigations.",
            tactics: '...',
            heroQuote: '“There is nothing more deceptive than an obvious fact”.',
            // style:
            backgroundColor: 'lightgrey',
            headersBackgroundColor: '#c1c454',
            fontColor: '',

            //fan stats:
            difficulty: '8',
            overallPower: '9',
            tier: 'S',
            // companion:
            companionName: 'Dr. Watson',
            companionRange: 'melee',
            companionRoute: '/watson',
            companionHealth: '8'
        },


        {
            id: 1013,
            elo: 2290,
            heroName: 'Sherlock(experienced)'
        },

        {
            id: 114,
            elo: 1950,
            heroName: 'Buffy(novice)'
        },

        {
            id: 14,
            elo: 2010,
            heroName: 'Buffy',
            heroLink: '/buffy',
            heroRange: 'ranged',
            movement: '3',
            heroHealth: '14',
            heroTrait: 'Buffy may move through spaces containing opposing fighters (including when she is moved by effects).',
            origin: 'TV series "Buffy the Vampire Slayer"',
            description: "Buffy is a fictional character and the protagonist of the television series \"Buffy the Vampire Slayer.\" The show, created by Joss Whedon, aired from 1997 to 2003 and followed Buffy as she fought against supernatural forces in her role as the \"Slayer.\" Buffy was portrayed by actress Sarah Michelle Gellar and was known for her strength, wit, and courage. Throughout the series, Buffy faced a variety of supernatural threats, from vampires to demons to evil gods, and often worked alongside a group of trusted allies known as the \"Scooby Gang.\"",
            tactics: '...',
            heroQuote: '"In every generation, there is a chosen one…"',
            // style:
            backgroundColor: 'rgba(255,199,202,0.99)',
            headersBackgroundColor: 'rgba(35,7,44,0.84)',
            fontColor: '#e8ccc6',
            //fan stats:
            difficulty: '5',
            overallPower: '5',
            tier: 'D',
            // companion:
            companionName: 'Giles or Xander',
            companionRange: 'melee',
            companionRoute: 'giles-or-xander',
            companionHealth: '6'
        },

        {
            id: 1014,
            elo: 2120,
            heroName: 'Buffy(experienced)'
        },


        {
            id: 115,
            elo: 1760,
            heroName: 'Angel(novice)'
        },

        {
            id: 15,
            elo: 1980,
            heroName: 'Angel',
            heroLink: '/angel',
            heroRange: 'melee',
            movement: '3',
            heroHealth: '14',
            heroTrait: 'After Angel or Faith attacks, if you lost the combat, draw 1 card.',
            origin: 'TV series "Buffy the Vampire Slayer"',
            description: "Angel is a fictional character in the television series \"Buffy the Vampire Slayer.\" He is a vampire with a soul who, after years of torment and guilt over his past actions, seeks redemption by helping Buffy and her friends fight evil forces. Angel is portrayed by actor David Boreanaz and first appears in the first season of \"Buffy\" before becoming a main character in his own spin-off series, \"Angel.\" He is known for his brooding demeanor, complicated relationship with Buffy, and his own struggles with his inner demons.",
            tactics: 'Angel.',
            heroQuote: '"I\'m a vampire. I know something about evil. And you\'re not it."',
            // style:
            backgroundColor: 'rgba(255,199,202,0.99)',
            headersBackgroundColor: 'rgba(35,7,44,0.84)',
            fontColor: '#e8ccc6',
            //fan stats:
            difficulty: '5',
            overallPower: '4',
            tier: 'E',
            // companion:
            companionName: 'Faith',
            companionRange: 'melee',
            companionRoute: '/faith',
            companionHealth: '8'
        },

        {
            id: 1015,
            elo: 2015,
            heroName: 'Angel(experienced)'
        },


        {
            id: 116,
            elo: 1755,
            heroName: 'Spike(novice)'
        },

        {
            id: 16,
            elo: 1985,
            heroName: 'Spike',
            heroLink: '/spike',
            heroRange: 'ranged',
            movement: '2',
            heroHealth: '15',
            heroTrait: 'At the start of your turn, you may place a Shadow token in any space adjacent to Spike or Drusilla.',
            origin: 'TV series "Buffy the Vampire Slayer"',
            description: "Spike is a fictional character in the television series \"Buffy the Vampire Slayer.\" He is a vampire with bleached blonde hair and British accent, known for his cocky attitude, love of violence, and rebellious nature. Spike is initially introduced as a villain in Season 2, but later becomes a love interest for Buffy and a member of the Scooby Gang. He is portrayed by actor James Marsters and is a popular character in the \"Buffyverse.\" Spike also appears in the spin-off series \"Angel\" and has continued to appear in various comic book series and other media since the end of the original show.",
            tactics: '...',
            heroQuote: '"Out for a walk... bitch."',
            // style:
            backgroundColor: 'rgba(255,199,202,0.99)',
            headersBackgroundColor: 'rgba(35,7,44,0.84)',
            fontColor: '#e8ccc6',
            //fan stats:
            difficulty: '5',
            overallPower: '4',
            tier: 'E',
            // companion:
            companionName: 'Drusila',
            companionRange: 'melee',
            companionRoute: '/drusila',
            companionHealth: '7'
        },

        {
            id: 1016,
            elo: 2020,
            heroName: 'Spike(experienced)'
        },

        {
            id: 117,
            elo: 1760,
            heroName: 'Willow(novice)'
        },

        {
            id: 17,
            elo: 1995,
            heroName: 'Willow',
            heroLink: '/willow',
            heroRange: 'ranged',
            movement: '2',
            heroHealth: '14',
            heroTrait: 'When Willow or Tara is dealt damage, Willow becomes Dark Willow.\n' +
                '\n' +
                'At the end of your turn, if Dark Willow is adjacent to Tara, she becomes Willow.',
            origin: 'TV series "Buffy the Vampire Slayer"',
            description: "Willow Rosenberg is a fictional character from the television series \"Buffy the Vampire Slayer.\" She is portrayed by Alyson Hannigan and is one of the core members of the Scooby Gang. Willow begins the series as a shy and nerdy high school student who is best friends with Buffy. As the series progresses, she becomes more confident and powerful, eventually becoming a skilled witch. Willow is known for her intelligence, loyalty, and sense of humor. She also has several romantic relationships throughout the series, including with her best friend Xander and fellow witch Tara.",
            tactics: '...',
            heroQuote: '"The earth is definitely doomed."',
            // style:
            backgroundColor: 'rgba(255,199,202,0.99)',
            headersBackgroundColor: 'rgba(35,7,44,0.84)',
            fontColor: '#e8ccc6',
            //fan stats:
            difficulty: '5,5',
            overallPower: '4,5',
            tier: 'E',
            // companion:
            companionName: 'Tara',
            companionRange: 'ranged',
            companionRoute: 'tara',
            companionHealth: '6'
        },

        {
            id: 1017,
            elo: 2040,
            heroName: 'Willow(experienced)'
        },


        {
            id: 118,
            elo: 1820,
            heroName: 'Beowulf(novice)'
        },

        {
            id: 18,
            elo: 2060,
            heroName: 'Beowulf',
            heroLink: '/beowulf',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '17',
            heroTrait: 'Beowulf starts with 1 Rage.\n' +
                'When Beowulf is dealt damage, he gains 1 Rage.\n' +
                'Beowulf has a maximum of 3 rage.',
            origin: 'Old English poem "Beowulf" (between the 8th and 11th centuries)',
            description: "Beowulf is the protagonist of the Old English epic poem \"Beowulf\". The poem tells the story of Beowulf's heroic feats, which include battling various monsters and protecting his people from harm.\n" +
                "\n" +
                "Beowulf's backstory is not fully described in the poem, but it is mentioned that he is the son of the warrior Ecgtheow, and that he comes from the land of the Geats, which is located in present-day Sweden. Beowulf first comes to the aid of the Danish king Hrothgar, who is being terrorized by the monster Grendel. Beowulf defeats Grendel and then also battles and kills Grendel's mother.\n" +
                "\n" +
                "Later in the poem, Beowulf becomes king of the Geats and continues to defend his people against various monsters, including a dragon. Beowulf ultimately dies in battle with the dragon, but his bravery and honor are celebrated by his people.",
            tactics: 'Rage rage.',
            heroQuote: '“I shall gain glory or die.”',
            // style:
            backgroundColor: '#b1b6b7',
            headersBackgroundColor: '#d8b56b',
            fontColor: '',
            //fan stats:
            tier: 'B',
            difficulty: '6',
            overallPower: '7',
            // companion:
            companionName: 'Wiglaf',
            companionRange: 'melee',
            companionRoute: 'wiglaf',
            companionHealth: '9'
        },

        {
            id: 1018,
            elo: 2186,
            heroName: 'Beowulf(experienced)'
        },


        {
            id: 119,
            elo: 1840,
            heroName: 'Little Red Riding Hood(novice)'
        },

        {
            id: 19,
            elo: 2100,
            heroName: 'Little Red Riding Hood',
            heroLink: '/red-hood',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '14',
            heroTrait: 'Resolve an effect on a card you play if the symbol next to the effect matches the item in your basket. At the start of the game, place LITTLE RED\'s BASKET in your discard pile. Little Red\'s Basket: This starts in your discard pile. It does not count as a card. (🌟 counts as any one 🐺🌹⚔️ symbol.)',
            origin: 'European folclore"',
            description: "In the classic version of the story, Little Red Riding Hood is sent by her mother to deliver food to her sick grandmother who lives in the woods. Along the way, she encounters a cunning wolf who tricks her into revealing the location of her grandmother's house. The wolf then goes to the grandmother's house, eats her, and disguises himself in her clothing before tricking Little Red Riding Hood and attempting to eat her as well. In most versions of the story, Little Red Riding Hood is eventually rescued by a hunter who kills the wolf and saves her and her grandmother.",
            tactics: 'Hard to play character. You must calculate card rotating to make powerful combinations.',
            heroQuote: '"Grandmother dear, what big legs you have!" ',
            // style:
            backgroundColor: '#7a7373',
            headersBackgroundColor: '#56091f',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'A',
            difficulty: '8,5',
            overallPower: '7,5',
            // companion:
            companionName: 'Huntsman',
            companionRange: 'ranged',
            companionRoute: 'huntsman',
            companionHealth: '9'
        },

        {
            id: 1019,
            elo: 2226,
            heroName: 'Little Red Riding Hood (experienced)'
        },

        {
            id: 120,
            elo: 1790,
            heroName: 'Deadpool (novice)'
        },

        {
            id: 20,
            elo: 1990,
            heroName: 'Deadpool',
            heroLink: '/deadpool',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '10',
            heroTrait: ' After you attack, Deadpool recovers 1 health.\n' +
                '\n' +
                'Also, if your opponent\'s real name is Logan, all your attacks are +5.',
            origin: 'Marvel',
            description: "His real name is Wade Wilson, and he is a former Special Forces operative turned mercenary who gains accelerated healing powers after undergoing a dangerous experimental treatment. However, his powers come at a great cost, as they also cause him intense physical and emotional pain.\n" +
                "  Deadpool is known for his irreverent and self-referential humor, as well as his tendency to break the fourth wall and directly address the reader.\n" +
                "  Despite his humorous demeanor, Deadpool is also a deeply troubled and tragic character. He struggles with mental illness, including multiple personality disorder and suicidal thoughts. He is also haunted by his past, which includes a difficult childhood and a failed marriage.\n",
            tactics: '...',
            heroQuote: '"House blowing up builds character." ',
            // style:
            backgroundColor: '#b76767',
            headersBackgroundColor: '#100202',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'E',
            difficulty: '6',
            overallPower: '4',
            // companion:
            companionName: 'None',

        },

        {
            id: 1020,
            elo: 2020,
            heroName: 'Deadpool (experienced)'
        },


        {
            id: 121,
            elo: 1895,
            heroName: 'Achilles (novice)'
        },

        {
            id: 21,
            elo: 2135,
            heroName: 'Achilles',
            heroLink: '/achilles',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '18',
            heroTrait: 'When Patroclus is defeated, discard 2 random cards. While Patroclus is defeated: Add +2 to the value of all Achilles\'s attacks. If Achilles wins combat, draw 1 card.',
            origin: 'Illiad (8th century BC). Author: Homer.',
            description: "Achilles is a character from Greek mythology, known for his great strength and fighting skills. He was the son of the sea nymph Thetis and the mortal Peleus. Legend has it that his mother dipped him in the river Styx as a baby, making him invulnerable except for his heel. Thus, his \"Achilles' heel\" became his only weakness. \n" +
                "  Achilles was known for his bravery and strength, and became the greatest warrior among the Greeks during the Trojan War. On this war Trojan prince Hector had killed Achilles' friend Patroclus. Achilles became grief-stricken and sought revenge, finally defeated Hector and dragged his body behind his chariot. However, Achilles himself was killed when Paris, a Trojan prince, shot an arrow into his heel – his only weak spot. This has become the origin of the phrase \"Achilles' heel\" meaning a person's vulnerability or weakness.\n",
            tactics: '...',
            heroQuote: '"I\'ll tell you a secret. Something they don\'t teach you in your temple. The Gods envy us. They envy us because we\'re mortal, because any moment might be our last." ',
            // style:
            backgroundColor: '#b99d77',
            headersBackgroundColor: '#593010',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'A',
            difficulty: '5,5',
            overallPower: '7,8',
            // companion:
            companionName: 'Patroclus',
            companionRange: 'melee',
            companionRoute: 'patroclus',
            companionHealth: '6'
        },

        {
            id: 1021,
            elo: 2235,
            heroName: 'Achilles (experienced)'
        },

        {
            id: 122,
            elo: 1865,
            heroName: 'Bloody Mary (novice)'
        },

        {
            id: 22,
            elo: 2045,
            heroName: 'Bloody Mary',
            heroLink: '/bloody-mary',
            heroRange: 'melee',
            movement: '3',
            heroHealth: '16',
            heroTrait: 'At the start of your turn, if you have exactly 3 cards in hand, gain 1 action.',
            origin: 'City legends',
            description: "Bloody Mary is a legendary ghost or spirit often associated with a ritual performed in front of a mirror. According to the urban legend, if you say her name three times while looking into a mirror in a dark room, she will appear and may harm or kill you. The origins of the legend are unclear, but it has been passed down through generations as a scary story told at sleepovers and around campfires. Some variations of the legend suggest that Bloody Mary was a woman who was executed for committing a crime, while others claim she was a witch or a vengeful spirit seeking revenge.",
            tactics: '...',
            heroQuote: '"Bloody Mary. Bloody Mary. Bloody Mary." ',
            // style:
            backgroundColor: '#a69293',
            headersBackgroundColor: '#770b24',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'D',
            difficulty: '6',
            overallPower: '5,5',
            // companion:
            companionName: 'None',
        },

        {
            id: 1022,
            elo: 2130,
            heroName: 'Bloody Mary(experienced)'
        },

        {
            id: 123,
            elo: 1905,
            heroName: 'Sun Wukong (novice)'
        },

        {
            id: 23,
            elo: 2140,
            heroName: 'Sun Wukong',
            heroLink: '/sun-wukong',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '17',
            heroTrait: 'At the start of your turn, you may take 1 damage to summon a Clone in an empty space adjacent to Sun Wukong.\n' +
                'Do not start with any Clones on the board.',
            origin: 'Chinese folklore',
            description: '  Sun Wukong, also known as the Monkey King, is a prominent figure in ancient Chinese folklore. His story first appeared in the 16th century novel "Journey to the West," but his origins can be traced back to earlier Chinese legends and myths.\n' +
                '\n' +
                '  In ancient Chinese folklore, Sun Wukong was said to have been born from a stone egg that was incubated by the elements of nature. He possessed immense strength and supernatural powers, including the ability to fly, transform himself into other forms, and summon a magical staff that could change size and shape.\n' +
                '\n' +
                '  Sun Wukong was known for his rebellious nature and his constant challenges to authority. In one ancient tale, he even challenges the Jade Emperor of Heaven and causes chaos in the celestial realm.\n' +
                '\n' +
                '  Despite his mischievous and sometimes destructive nature, Sun Wukong was also revered as a protector and a champion of the underdog. He was often depicted as a defender of the innocent and a champion of justice.',
            tactics: '...',
            heroQuote: '"Uh-uh-ah-ah" ',
            // style:
            backgroundColor: '#d9ae8c',
            headersBackgroundColor: '#8a0e1e',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'A',
            difficulty: '7',
            overallPower: '8',
            // companion:
            companionName: 'Clones x3',
            companionRange: 'melee',
            companionRoute: 'clones',
            companionHealth: '1'
        },

        {
            id: 1023,
            elo: 2251,
            heroName: 'Sun Wukong (experienced)'
        },


        {
            id: 124,
            elo: 1850,
            heroName: 'Yennenga (novice)'
        },

        {
            id: 24,
            elo: 2090,
            heroName: 'Yennenga',
            heroLink: '/yennenga',
            heroRange: 'ranged',
            movement: '2',
            heroHealth: '15',
            heroTrait: 'If Yennenga would take damage, you may assign any amount of that damage to one or more Archers in her zone instead. (You may not assign more damage to an Archer than their remaining health.)\n' +
                '\n' +
                'Notes\n' +
                'If damage would be dealt to Yennenga and an Archer at the same time, Yennenga cannot assign damage from herself to that Archer if the Archer would already be defeated by the damage it took. (Yennenga cannot use her ability to make damage disappear.)',
            origin: 'Real person',
            description: "  Yennenga was a legendary warrior princess and the founder of the Mossi Kingdom in West Africa. According to the legend, she was born in the 12th century to a king in the Dagomba Kingdom, now part of modern-day Ghana. She became a skilled warrior and rode into battle on horseback, leading her own army. She later fell in love with Riale, a hunter from the neighboring Bobo people, and they had a son named Ouédraogo, who went on to become the first emperor of the Mossi Kingdom. Yennenga is celebrated as a symbol of strength and courage in West African folklore, and her legacy lives on as an inspiration to women and girls in the region.",
            tactics: '...',
            heroQuote: '"The three things are: to see beauty in the world and say that it is ugly; to get up in the morning and do what you cannot do; and finally to give free rein to your dreams, because whoever dreams too much becomes a victim of his dreams." ',
            // style:
            backgroundColor: '#c9c585',
            headersBackgroundColor: '#4149bb',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'S',
            difficulty: '9',
            overallPower: '8,5',
            // companion:
            companionName: 'Archers x2',
            companionRange: 'ranged',
            companionRoute: 'archers',
            companionHealth: '2'

        },

        {
            id: 1024,
            elo: 2276,
            heroName: 'Yennenga (experienced)'
        },

        {
            id: 125,
            elo: 1860,
            heroName: 'Luke Cage (novice)'
        },

        {
            id: 25,
            elo: 2110,
            heroName: 'Luke Cage',
            heroLink: '/luke-cage',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '13',
            heroTrait: 'Luke Cage takes 2 less combat damage from attacks.\n' +
                '\n' +
                '(When defending, Luke Cage wins combat if he takes no damage, even if he didn\'t play a card.)\n' +
                '\n',
            origin: 'Marvel universe',
            description: "Luke Cage is a Marvel Comics superhero created in 1972 by Archie Goodwin, John Romita Sr., and George Tuska. He is a street-smart, tough, and bulletproof Black man from Harlem, New York City. Originally framed for a crime he didn't commit, Cage was experimented on in prison and gained his superhuman strength and indestructible skin. He uses his abilities to fight crime and protect the people of Harlem. Luke Cage has been featured in several comic book series and adaptations, including a popular Netflix television series, where he is portrayed by actor Mike Colter.",
            tactics: '...',
            heroQuote: '"You can\'t burn me, you can\'t blast me, and you definitely can\'t break me. You wanna test me? Step up. I\'m right here." ',
            // style:
            backgroundColor: '#b0ab9a',
            headersBackgroundColor: 'rgba(236,218,69,0.6)',
            fontColor: '',
            //fan stats:
            tier: 'A',
            difficulty: '6,5',
            overallPower: '7,5',
            // companion:
            companionName: 'Misty Knight',
            companionRange: 'ranged',
            companionRoute: 'misty-knight',
            companionHealth: '6'

        },

        {
            id: 1025,
            elo: 2231,
            heroName: 'Luke Cage (experienced)'
        },

        {
            id: 126,
            elo: 1850,
            heroName: 'Ghost Rider(novice)'
        },

        {
            id: 26,
            elo: 2080,
            heroName: 'Ghost Rider',
            heroLink: '/ghost-rider',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '17',
            heroTrait: 'Ghost Rider starts the game with 5 Hellfire. When you maneuver you may spend 1 Hellfire. If you do, increase Ghost Rider\'s move value to 4, and he mave move through opposing fighters. Then deal 1 damage to each opposing fighter he moved through.\n' +
                '\n' +
                'Notes\n' +
                'If you spend a Hellfire to use Ghost Rider\'s ability, your movement value is set to 4, and cannot be increased by BOOSTING your maneuver.\n' +
                '\n',
            origin: 'Marvel universe',
            description: "Ghost Rider is a Marvel Comics superhero who first appeared in 1972. The character is known for his fiery skull and motorcycle, as well as his supernatural abilities. The original Ghost Rider, Johnny Blaze, was a stunt motorcyclist who made a deal with the demon Mephisto to save the life of his father. As a result, Blaze became bonded with the demonic entity Zarathos, gaining the ability to transform into Ghost Rider and wield supernatural powers. The character is known for his dark, brooding demeanor and intense battles against evil forces.",
            tactics: '...',
            heroQuote: '"I am vengeance. I am retribution. Fear me, for I am the Ghost Rider." ',
            // style:
            backgroundColor: '#837575',
            headersBackgroundColor: '#f6643c',
            fontColor: '',
            //fan stats:
            tier: 'C',
            difficulty: '6',
            overallPower: '6,5',
            // companion:
            companionName: 'None',

        },

        {
            id: 1026,
            elo: 2171,
            heroName: 'Ghost Rider (experienced)'
        },

        {
            id: 127,
            elo: 1860,
            heroName: 'Moon Knight (novice)'
        },

        {
            id: 27,
            elo: 2085,
            heroName: 'Moon Knight',
            heroName2: 'Khonshu',
            heroName3: 'Mr. Knight',
            heroLink: '/moon-knight',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '16',
            heroTrait: 'Moon Knight\n' +
                'At the start of your turn, move up to 2 spaces.\n' +
                '\n' +
                'Khonshu\n' +
                'Khonshu adds +2 to the value of his attack cards. He does not take damage from effects other than combat damage.\n' +
                '\n' +
                'Mr. Knight\n' +
                'Mr. Knight adds +1 to all his defense values.\n' +
                '\n' +
                'At the end of your turn, change to your next identity (In order, Moon Knight -> Khonshu -> Mr. Knight, repeating).',
            origin: 'Marvel universe',
            description: "Moon Knight is a Marvel Comics superhero who first appeared in 1975. The character is known for his multiple personalities and mystical powers, as well as his signature all-white costume. Moon Knight's real name is Marc Spector, a former mercenary who was left for dead in the Egyptian desert. He was rescued by the Egyptian moon god, Khonshu, and given a new lease on life as Moon Knight. As a superhero, Moon Knight fights crime using his enhanced strength and agility, as well as his arsenal of weapons and gadgets. He is often depicted as a complex and troubled character, struggling with his own identity and the demands of being a hero.",
            tactics: '...',
            heroQuote: '"I have a god in me. I am the god of vengeance." ',
            // style:
            backgroundColor: '#bbc8ce',
            headersBackgroundColor: '#174e8a',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'B',
            difficulty: '7',
            overallPower: '7',
            // companion:
            companionName: 'None'

        },

        {
            id: 1027,
            elo: 2211,
            heroName: 'Moon Knight (experienced)'
        },

        {
            id: 128,
            elo: 1840,
            heroName: 'Daredevil (novice)'
        },

        {
            id: 28,
            elo: 2120,
            heroName: 'Daredevil',
            heroLink: '/daredevil',
            heroRange: 'melee',
            movement: '3',
            heroHealth: '17',
            heroTrait: 'DURING COMBAT: If you have 2 or fewer cards in your hand, you may BLIND BOOST your attack or defense.\n' +
                '(If you have other DURING COMBAT effects, choose the order.)\n' +
                '\n' +
                'Notes\n' +
                'When you BLIND BOOST, you discard the top card of your deck and add its BOOST value onto the card you played in combat. Daredevil\'s ability cannot be canceled. Follow the normal resolution rules: Defender resolves first.',
            description: "Daredevil is a Marvel Comics superhero who first appeared in 1964. The character is known for his blindness and his use of heightened senses to fight crime as a lawyer and vigilante. Daredevil's real name is Matt Murdock, a blind lawyer from Hell's Kitchen, New York City. After a childhood accident involving toxic waste, Murdock's other senses were enhanced to superhuman levels, allowing him to \"see\" without sight. As a superhero, Daredevil uses his acrobatic and martial arts skills to fight crime and protect the people of Hell's Kitchen. He is often depicted as a complex and conflicted character, struggling with his Catholic faith and his dual identities.",
            tactics: '...',
            origin: 'Marvel universe',
            heroQuote: '"I have shown you violence, and you did not heed my warning. Now, you will feel its cold embrace." ',
            // style:
            backgroundColor: '#dc7272',
            headersBackgroundColor: '#af0d0d',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'A',
            difficulty: '9',
            overallPower: '8',
            // companion:
            companionName: 'None'

        },

        {
            id: 1028,
            elo: 2241,
            heroName: 'Daredevil (experienced)'
        },


        {
            id: 129,
            elo: 1810,
            heroName: 'Bullseye(novice)'
        },

        {
            id: 29,
            elo: 2040,
            heroName: 'Bullseye',
            heroLink: '/bullseye',
            heroRange: 'ranged',
            movement: '2',
            heroHealth: '14',

            heroTrait: 'DURING COMBAT: If you have 2 or fewer cards in your hand, you may BLIND BOOST your attack or defense.\n' +
                '(If you have other DURING COMBAT effects, choose the order.)\n' +
                '\n' +
                'Notes\n' +
                'When you BLIND BOOST, you discard the top card of your deck and add its BOOST value onto the card you played in combat. Daredevil\'s ability cannot be canceled. Follow the normal resolution rules: Defender resolves first.',
            description: "ullseye is a Marvel Comics supervillain who first appeared in 1976. The character is known for his expert marksmanship and deadly accuracy with any projectile weapon. Bullseye's real name is Lester, and he has a troubled past as a child killer and professional assassin. He is often portrayed as a hired gun for various criminal organizations, taking on assignments to eliminate anyone who stands in his employers' way. Bullseye has had numerous clashes with various Marvel superheroes, including Daredevil, Spider-Man, and the Punisher. He is a ruthless and sadistic villain who takes pleasure in killing and causing chaos.",
            tactics: '...',
            origin: 'Marvel universe',
            heroQuote: '"I like to kill people slow, to honor their last moments."',
            // style:
            backgroundColor: '#c6c4ea',
            headersBackgroundColor: '#212e9a',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'C',
            difficulty: '7',
            overallPower: '6,5',
            // companion:
            companionName: 'None'

        },

        {
            id: 1029,
            elo: 2166,
            heroName: 'Bullseye (experienced)'
        },

        {
            id: 130,
            elo: 1915,
            heroName: 'Electra (novice)'
        },

        {
            id: 30,
            elo: 2160,
            heroName: 'Elektra',
            heroName2: 'Elektra Resurrected',
            heroLink: '/elektra',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '7',
            heroHealth2: '9',
            heroTrait: 'The first time Elektra would be defeated, remove her and all Hand from the board. She is not defeated. At the start of your next turn, Resurrect her. (Ignore effects with the RESURRECTED symbol.)\n' +
                '\n' +
                'When Elektra Resurrects: Flip your health dial. Shuffle your discard pile into your deck.\n' +
                '\n' +
                'Place Elektra and all Hand back onto the board with each fighter in a different zone. (You must resolve effects with the RESURRECTED symbol).',
            description: "Elektra is a Marvel Comics superheroine and occasional villain who first appeared in 1981. The character is known for her exceptional martial arts skills and her proficiency in using various weapons, including her signature twin sai. Elektra's real name is Elektra Natchios, and she has a complicated history as a trained assassin and the former lover of Daredevil. She is often portrayed as a morally ambiguous character, working as a hired killer for various criminal organizations but also showing a desire to help those in need. Elektra has had numerous clashes with various Marvel superheroes, including Daredevil, Wolverine, and Spider-Man. She is a skilled and deadly fighter who is not to be underestimated.",
            tactics: 'Luke',
            origin: 'Marvel universe',
            heroQuote: '"Sometimes you have to fight for what you believe in. Sometimes you have to fight for your own survival. Sometimes you have to fight for what\'s right. And sometimes... you just have to fight." ',
            // style:
            backgroundColor: '#FFDFC4',
            headersBackgroundColor: '#91111c',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'S',
            difficulty: '7,5',
            overallPower: '9,5',
            // companion:
            companionName: 'The Hand x4',
            companionRange: 'melee',
            companionRoute: 'the-hand',
            companionHealth: '1'

        },

        {
            id: 1030,
            elo: 2301,
            heroName: 'Electra(experienced)'
        },

        {
            id: 131,
            elo: 1830,
            heroName: 'Dr. Sattler (novice)'
        },

        {
            id: 31,
            elo: 2050,
            heroName: 'Dr. Sattler',
            heroFullName: 'Dr. Ellie Sattler',
            heroLink: '/dr-sattler',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '13',
            heroTrait: 'After Dr. Sattler or Dr. Malcolm move, place an insight token in their new space. You have 5 insight tokens.\n' +
                '\n' +
                'Notes\n' +
                'Whenever either of your fighters moves to a new space, place and insight token in their new space. Tokens may be placed in spaces with other tokens, including other insight tokens.\n' +
                'There tokens have no effect themselves but any of your cards interact with them. When you remove insight tokens from the board, return them to your supply. You can place them on the board again in the future.\n' +
                'If you would place an insight token but don\'t have any in your supply, nothing happens..',
            description: "Dr. Ellie Sattler is a character from the Jurassic Park franchise. She is a paleobotanist and a close colleague of Dr. Alan Grant, with whom she has a romantic relationship. Ellie is a strong and intelligent character who is not afraid to speak her mind. She is resourceful and quick-witted, using her knowledge of botany to survive various dangerous situations in the Jurassic Park films. Ellie is portrayed as a compassionate and caring character, especially towards the dinosaurs in the park. She is a key member of the team that tries to contain the dinosaur outbreak in the first film and plays a crucial role in subsequent installments of the franchise.",
            tactics: 'Luke',
            origin: 'Jurassic Park',
            heroQuote: '"Dinosaurs eat man. Woman inherits the earth." ',
            // style:
            backgroundColor: '#9a8298',
            headersBackgroundColor: '#a93e6b',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'C',
            difficulty: '5',
            overallPower: '6,8',
            // companion:
            companionName: 'Dr. Malcolm',
            companionRange: 'melee',
            companionRoute: 'malcolm',
            companionHealth: '7'

        },

        {
            id: 1031,
            elo: 2176,
            heroName: 'Dr. Sattler (experienced)'
        },

        {
            id: 132,
            elo: 1935,
            heroName: 'T-rex (novice)'
        },

        {
            id: 32,
            elo: 2155,
            heroName: 'T-rex',
            heroLink: '/t-rex',
            heroRange: 'melee',
            movement: '1',
            heroHealth: '27',
            heroTrait: 'Special abilities\n' +
                'T-Rex is a large fighter. (She can attack up to 2 spaces away.) At the end of your turn, draw a card.\n' +
                '\n' +
                'Notes\n' +
                'Large fighters have an extended base that can occupy up to two spaces. Large fighters may start moving from any space they are in. When they do, rotate them so that the head is moving into the new space. Their tail always follows behind their head, entering the space the left. Large fighters also ignore one-way arrows on maps and cannot use secret passages.\n' +
                'Large fighters can attack up to 2 spaces away, even over fighters that occupy one of those spaces..',
            description: "Tyrannosaurus rex, often referred to as T-rex, is a species of dinosaur that lived during the late Cretaceous period, approximately 68 to 66 million years ago. It was one of the largest carnivorous dinosaurs, growing up to 40 feet in length and weighing up to 14 tons. T-rex is known for its powerful jaws, which could exert a force of up to 12,800 pounds, making it one of the strongest biters of any terrestrial animal that ever existed. In the Jurassic Park franchise, T-rex is featured as one of the main attractions of the dinosaur park and is one of the most iconic and memorable creatures in the series.",
            tactics: '...',
            heroQuote: '',
            origin: 'Jurassic Park',
            // style:
            backgroundColor: '#918491',
            headersBackgroundColor: '#524e4e',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'S',
            difficulty: '4',
            overallPower: '8,3',
            // companion:
            companionName: 'None',


        },

        {
            id: 1032,
            elo: 2266,
            heroName: 'T-rex (experienced)'
        },

        {
            id: 133,
            elo: 1825,
            heroName: 'Houdini (novice)'
        },

        {
            id: 33,
            elo: 2080,
            heroName: 'Houdini',
            heroFullName: 'Harry Houdini',
            heroLink: '/houdini',
            heroRange: 'melee',
            movement: '2',
            heroHealth: '14',
            origin: 'Real person',
            heroTrait: 'When you take the maneuver action and BOOST, you may place Houdini in any space instead of moving. (Bess moves as normal.)',
            description: "Harry Houdini, born Erik Weisz, was a Hungarian-born American illusionist and escape artist who lived from 1874 to 1926. He is widely regarded as one of the most famous magicians and performers in history, known for his daring and death-defying feats such as escaping from locked water tanks, straitjackets, and handcuffs. Houdini also performed acts of levitation and other illusions, and he was known for his skill in exposing fraudulent spiritualist mediums. His legacy as a master showman and innovator of magic and escapology continues to inspire and captivate audiences to this day.",
            tactics: '...',
            heroQuote: '"My brain is the key that sets me free." ',
            // style:
            backgroundColor: 'rgba(213,195,184,0.88)',
            headersBackgroundColor: '#304b1e',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'B',
            difficulty: '8',
            overallPower: '7',
            // companion:
            companionName: 'Bess',
            companionRange: 'melee',
            companionRoute: 'bess',
            companionHealth: '5'

        },

        {
            id: 1033,
            elo: 2200,
            heroName: 'Houdini (experienced)'
        },


        {
            id: 134,
            elo: 1830,
            heroName: 'The Genie(novice)'
        },


        {
            id: 34,
            elo: 2085,
            heroName: 'The Genie',
            heroLink: '/genie',
            heroRange: 'ranged',
            movement: '3',
            heroHealth: '16',
            heroTrait: 'At the start of your turn, you may discard 1 card to gain 1 action.',
            description: "Genie, also known as the Genie of the Lamp, is a fictional character from the Middle Eastern folk tale Aladdin. In the story, he is a magical being who is confined to an oil lamp and can be summoned by the person who possesses the lamp. The Genie is known for his ability to grant wishes, often with humorous and unexpected results. In some versions of the story, the Genie is portrayed as a trickster character who enjoys playing pranks on his masters. The Genie has since become a popular character in various adaptations of the Aladdin story, including the Disney animated film of the same name.",
            tactics: 'Luke',
            heroQuote: '"If you wanna be with me\n' +
                'Baby, there\'s a price to pay\n' +
                'I\'m a genie in a bottle\n' +
                'You gotta rub me the right way"',
            // style:
            backgroundColor: '#e1c483',
            headersBackgroundColor: '#810181',
            fontColor: '#e8ccc6',
            //fan stats:
            tier: 'B',
            difficulty: '8',
            overallPower: '7',
            // companion:
            companionName: 'None',
        },

        {
            id: 1034,
            elo: 2200,
            heroName: 'The Genie(experienced)'
        },


        // additional properties to heroes:


    ]

// export let heroesList = heroes.map(el => (
//     <Route key={el.id} path={el.pathName} element={el.componentName} heroName={el.heroName} power={el.power}
//            difficulty={el.difficulty} origin={el.origin} tactics={el.tactics}/>))


let [, arthur, , , alice, , , medusa, , , sinbad, , , bruceLee, , , bigfoot, , , robinHood, , , ingen, , , raptors, , , dracula, , , invisible, , , jekyll, , , sherlock, , , buffy, , , angel, , , spike, , , willow, , , beowulf, , , redHood, , , deadpool, , , achilles, , , bloodyMary, , , sunWukong, , , yennenga, , , lukeCage, , , ghostRider, , , moonKnight, , , daredevil, , , bullseye, , , elektra, , , sattler, , , trex, , , houdini, , , genie, ,] = heroesArr;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className='wrapper'>
            <App heroesArr={heroesArr} arthur={arthur} alice={alice} medusa={medusa} sinbad={sinbad}
                 bruceLee={bruceLee}
                 bigfoot={bigfoot} robinHood={robinHood}
                 ingen={ingen} raptors={raptors}
                 dracula={dracula} invisible={invisible} jekyll={jekyll} sherlock={sherlock}
                 angel={angel} buffy={buffy} spike={spike} willow={willow}
                 beowulf={beowulf} redHood={redHood}
                 deadpool={deadpool}
                 achilles={achilles} bloodyMary={bloodyMary} sunWukong={sunWukong} yennenga={yennenga}
                 lukeCage={lukeCage} ghostRider={ghostRider} moonKnight={moonKnight}
                 daredevil={daredevil} bullseye={bullseye} elektra={elektra}
                 sattler={sattler} trex={trex}
                 houdini={houdini} genie={genie}

            />
        </div>

    </BrowserRouter>
);

