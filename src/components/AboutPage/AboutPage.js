import ContactForm from "../FeedbackForm/FeedbackForm";
import s from './AboutPage.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

const AboutPage = () => {
    return (
        <div className={s.content}>
            <div className={s.header}>
                <h1>Welcome</h1>
            </div>
            <br/>
            <p>&nbsp;This is Unmatched board game's fun site.</p>
            <br/>
            <p>&nbsp;Playing with friend and don't know what hero to chose? You can try our hero  <NavLink to='/calculator' className={s.navbutton}>Random generator</NavLink> that depends on expansions you have. </p>

            <br/>
            <p>&nbsp;Wonder what hero is stronger? You can try our <NavLink to='/calculator' className={s.navbutton}>Odds Calculator </NavLink></p>
            <br/>
            <p>&nbsp;Check out our heroes encyclopedia. You can find there not only game stats, but their background and stats, based on fans opinion.</p>
            <br/>
            <br/>
            <br/>
            <div className={s.headerEmpty}></div>

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