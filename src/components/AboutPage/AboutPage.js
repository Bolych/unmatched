import ContactForm from "../FeedbackForm/FeedbackForm";
import s from './AboutPage.module.css'

const AboutPage = () => {
    return (
        <div className={s.content}>
            <div className={s.header}>
                <h1>Welcome</h1>
            </div>
            <br/>
            <p>&nbsp;This is Unmatched board game's fun site.</p>
            <br/>
            <p>&nbsp;Playing with friend and don't know what hero to chose? You can our try hero random generator that depends on expansions you have. </p>
            <br/>
            <p>&nbsp;Wonder what hero is stronger? You can try our odds calculator. </p>
            <br/>
            <p>&nbsp;Also you can find information about heroes. Not only game stats, but their background and stats based on fans opinion.</p>
            <br/>
            <br/>
            <div className={s.disclaimer}>
            <p>&nbsp;This site is just for fun, not for commercial purposes. And it is not affiliated with Restoration
                Games or Mondo Games. If you have any suggestions or objections, found a mistake, or maybe you are owner of some art and
                you don't want it to be here, just contact us.</p>
            </div>
            <br/>
            <div className={s.feedback}>
                <ContactForm/>
            </div>
            <br/>
        </div>
    )
}

export default AboutPage