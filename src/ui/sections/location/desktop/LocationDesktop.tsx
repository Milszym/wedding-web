import { useState } from "react";
import { PeachButton } from "../../../common/PeachButton"
import { LOCATION_DESCRIPTION, LOCATION_SUBTITLE, LOCATION_TITLE, navigateToMap, navigateToZielonaBrama } from "../Location"
import "./locationDesktop.css"
import { useInView } from "react-intersection-observer";

export const LocationDesktop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView),
    });

    return <section
        id="location"
        className="h-screen w-full flex flex-col items-center justify-center locationContent">
        <div className="locationImages">
            <img ref={ref}
                className={`locationMainImage slideIn1 ${isVisible ? ' slidedIn' : ''}`} src="/images/zdjecie_sali.png" onClick={navigateToZielonaBrama} />
            <img className={`locationMapImage slideIn2 ${isVisible ? ' slidedIn' : ''}`} src="/images/mapa.png" onClick={navigateToMap} />
            <div className={`locationMapButton slideIn3 ${isVisible ? ' slidedIn' : ''}`}>
                <PeachButton text="Zobacz na mapie" onClick={navigateToMap} />
            </div>
        </div>
        <div className="locationText">
            <div className="locationTitle">{LOCATION_TITLE}</div><br />
            <div className="locationSubtitle">{LOCATION_SUBTITLE}</div>
            <div className="locationDescription">{LOCATION_DESCRIPTION}</div>
        </div>
    </section>
}