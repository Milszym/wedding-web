import "./title.css"
import { Countdown } from "./Countdown"
import { MARRIAGE_DATE } from "../../../App"
import { isMobile } from "../../../util/isMobile"

export const Title = () => {

    const imagePath = isMobile() ? '/images/zdjecie_z_wesela_cropped.jpg' : '/images/zareczyny_cropped.jpg'

    return <section id="title" className="w-full h-screen titleSection">
        <img className="titleBg" src={imagePath} />
        <div className="titleOverlay" />
        <div className="titleContent">
            <div>
                <h1 className="title">Dorota i Szymon</h1>
                <br />
                <div className="titleDate">
                    12 Lipca 2025
                </div>
                <div className="titleHour">
                    16:30
                </div>
                {!isMobile() && <div className="titleCountdown">
                    <Countdown targetDate={MARRIAGE_DATE} />
                </div>}
            </div>
            {isMobile() && <div className="titleCountdown">
                <Countdown targetDate={MARRIAGE_DATE} />
            </div>}
        </div>
    </section>
}