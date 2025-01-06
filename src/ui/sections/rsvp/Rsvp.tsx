import { useState } from "react";
import { PeachButton } from "../../common/PeachButton"
import "./rsvp.css"
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const toastStyle = {
    fontFamily: 'Cormorant'
}

export const Rsvp = () => {

    const [who, setWho] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [sendEnabled, setSendEnabled] = useState(true)

    const sendEmail = async () => {
        setSendEnabled(false)
        const serviceID = 'service_d4bc9kv';
        const templateID = 'template_ri7qxkn';
        const templateParams = {
            the_from: who,
            the_email: email,
            the_message: message,
        };

        try {
            const response = await emailjs.send(serviceID, templateID, templateParams);
            console.log('Email successfully sent', response.status, response.text);
            toast.success('Pomyślnie wysłano wiadomość. Dziękujemy i do zobaczenia!', {
                style: toastStyle
            });
            setEmailSent(true)
        } catch (error) {
            toast.error('Niestety nie udało się wysłać wiadomości. Spróbuj później lub zadzwoń do nas osobiście :)', {
                style: toastStyle
            });
            console.error('Could not send email', error);
        } finally {
            setSendEnabled(true)
        }
    }

    const onWhoChanged = (newWho: string) => {
        setWho(newWho)
    }

    const onMessageChanged = (newMessage: string) => {
        setMessage(newMessage)
    }

    const onEmailChanged = (newEmail: string) => {
        setEmail(newEmail)
    }

    return <section
        id="rsvp"
        className="h-screen w-full rsvpContent">
        <div className="rsvpTitle">RSVP</div><br />
        <div className="rsvpDescription">
            Prosimy o potwierdzenie swojej obecności na weselu wraz z informacją o tym czy zabieracie ze sobą swoje dzieci i czy chcecie skorzystać z noclegu.
            <br /><br />
            Nie możemy się już doczekać aż spędzimy z Wami ten wyjątkowy dzień!
        </div><br />
        {!emailSent ? <>
            <div className="rsvpInputs">
                <input type="text" placeholder="Kto?" onChange={(event) => onWhoChanged(event.target.value)}
                    className="rsvpInputText input input-bordered" />
                <br />
                <textarea className="rsvpInputText textarea textarea-bordered" placeholder="Wiadomość"
                    onChange={(event) => onMessageChanged(event.target.value)} />
                <br />
                <input type="email" placeholder="Email"
                    onChange={(event) => onEmailChanged(event.target.value)}
                    className="rsvpInputText input input-bordered" />
            </div>
            <div className="rsvpButton">
                <PeachButton text="Wyślij" enabled={sendEnabled} onClick={sendEmail} />
            </div>
        </> : <div className="rsvpThankYouTitle">
            Dziękujemy! 😊 <br />Do zobaczenia! 👋
        </div>}
        <br />
        <div className="rsvpOurContacts">
            <div className="rsvpOurContact">
                Dorota <PhoneNumber phoneNumber="880 491 301" />
            </div>
            <div className="rsvpOurContact">
                Szymon <PhoneNumber phoneNumber="665 123 549" />
            </div>
        </div>
    </section >
}

const PhoneNumber = (props: { phoneNumber: string }) => {
    const callNumber = (phoneNumber: string) => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return <span className="rsvpPhone" onClick={() => callNumber(props.phoneNumber)}>
        {props.phoneNumber}
    </span>
}