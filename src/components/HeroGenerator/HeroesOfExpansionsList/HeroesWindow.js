
import s from './HeroesWindow.module.css'

const HeroesWindow = (props) => {

    return (
        <div className={s.content}>
            <p>Total heroes:</p>
          {props.heroesArr.join(', ')}

        </div>
    )
}

export default HeroesWindow