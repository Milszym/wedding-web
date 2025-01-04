import { PeachButton } from "../../common/PeachButton"
import "./rsvp.css"

export const Rsvp = () => {

    const sendEmail = () => {
        alert("Jeszcze nie działa. Niestety - musisz zadzwonić hehe")
    }

    return <section
        id="memories"
        className="h-screen w-full rsvpContent">
        <div className="rsvpTitle">RSVP</div><br />
        <div className="rsvpDescription">
            Prosimy o potwierdzenie swojej obecności na weselu wraz z informacją o tym czy zabieracie ze sobą swoje dzieci i czy chcecie skorzystać z noclegu.
            <br /><br />
            Nie możemy się już doczekać aż spędzimy z Wami ten wyjątkowy dzień!
        </div><br />

        <div className="rsvpInputs">
            <input type="text" placeholder="Kto?"
                className="rsvpInputText input input-bordered" />
            <br />
            <textarea className="rsvpInputText textarea textarea-bordered" placeholder="Wiadomość" />
            <br />
            <input type="text" placeholder="Email"
                className="rsvpInputText input input-bordered" />
        </div>
        <div className="rsvpButton">
            <PeachButton text="Wyślij" onClick={sendEmail} />
        </div>
        <br/>
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