import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import s from './FeedbackForm.module.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("xlekngwa");
    if (state.succeeded) {
        return <p>Thanks for your message!</p>;
    }
    return (


        <form className={s.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email, if you want us to response on your message.
            </label>
            <input className={s.mailForm}
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            Your Message:
            <textarea className={s.messageForm}
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button className={s.submitButton} type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}

export default ContactForm