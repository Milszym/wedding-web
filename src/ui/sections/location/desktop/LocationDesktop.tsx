import { PeachButton } from "../../../common/PeachButton"
import { LOCATION_DESCRIPTION, LOCATION_SUBTITLE, LOCATION_TITLE, navigateToMap, navigateToZielonaBrama } from "../Location"
import "./locationDesktop.css"

export const LocationDesktop = () => {

    return <section
        id="location"
        className="h-screen w-full flex flex-col items-center justify-center locationContent">
        <div className="locationImages">
            <img className="locationMainImage" src="/images/zdjecie_sali.png" onClick={navigateToZielonaBrama} />
            <img className="locationMapImage" src="/images/mapa.png" onClick={navigateToMap} />
            <div className="locationMapButton">
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