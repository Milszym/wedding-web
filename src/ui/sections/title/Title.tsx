import WeddingImage from "./wedding_background.png"
import "./title.css"
import { Countdown } from "./Countdown"
import { MARRIAGE_DATE } from "../../../App"

export const Title = () => {

    return <section id="title" className="relative w-full h-screen titleSection">
        <div className="titleOverlay"></div>
        <div className="absolute inset-0 flex items-center justify-center titleContent">
            <div>
                <h1 className="title">Dorota i Szymon</h1>
                <br />
                <div className="titleDescription">
                    z radością zapraszamy na<br />
                    Ślub i Wesele<br />
                    które odbędą się dnia 12 lipca 2025<br />
                    o godzinie 16:30<br />
                    w Zielonej Bramie w Przywidzu<br />
                    na sali Sopockiej.<br />
                </div>
                <Countdown targetDate={MARRIAGE_DATE} />
            </div>
        </div>
    </section>
}