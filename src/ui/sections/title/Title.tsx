import "./title.css"
import { Countdown } from "./Countdown"
import { MARRIAGE_DATE } from "../../../App"

export const Title = () => {

    return <section id="title" className="relative w-full h-screen titleSection">
        <img className="titleBg" src="/images/zareczyny_cropped.jpg"/>
        <div className="titleOverlay"/>
        <div className="absolute inset-0 flex items-center justify-center titleContent">
            <div>
                <h1 className="title">Dorota i Szymon</h1>
                <br />
                <div className="titleDate">
                    12 Lipca 2025
                </div>
                <div className="titleHour">
                    16:30
                </div>
                <Countdown targetDate={MARRIAGE_DATE} />
            </div>
        </div>
    </section>
}