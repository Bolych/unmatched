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
            <p>&nbsp;You can try hero random generator that depends on expansions you have. </p>
            <br/>
               <p>&nbsp;You can check in odds
                calculator what chance of winning of particular hero versus another. Calculator is based on players
                experience. </p>
            <p>Hero you can find information about heroes. Not only game stats, but description and images of their prototypes, and also heroes stats based on players experience.</p>
            <br/>
            <br/>
            <p>&nbsp;This site is just for fun, not for commercial purposes. And it is not affiliated with Restoration
                Games or Mondo Games. If you have any suggestions or objections, found a mistake, or maybe you are owner of some art and
                you don't want it to be here, just contact us.</p>

            <br/>
            <div className={s.feedback}>
                <ContactForm/>
            </div>
            <br/>
        </div>
    )
}

export default AboutPage