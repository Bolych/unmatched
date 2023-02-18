import {useState} from "react";


const OutputWindow = () => {
    return (<div>!Хочу, чтобы выбранный герой передавался в этот компонент!</div>
    )
}

const HeroToCompare = (props) => {
    const [hero, setHero] = useState('')
    return (

        <div>
            <p>{props.name}</p>
            <div>
                <div>
                    <select hero={hero} onChange={(e) => setHero(e.target.value)}>
                        <option></option>
                        {props.state}
                    </select>
                </div>
                <p>Ваш выбор: {hero}</p>
            </div>
        </div>
    )
}

const OddsCalculatorPage = (props) => {
    const heroesInSelect = props.heroesArr.map(e => {
            return <option key={e.id}>{e.name.toString()}</option>
        }
    )
    return (<div>
            <div>
                <HeroToCompare name='Hero one' state={heroesInSelect}/>
                <HeroToCompare name='Hero two' state={heroesInSelect}/>
            </div>
            <br/>
            <OutputWindow/>
        </div>
    )
}


export default OddsCalculatorPage

