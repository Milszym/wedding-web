import { PeachButton } from "../../../common/PeachButton"
import { LOCATION_DESCRIPTION, LOCATION_SUBTITLE, LOCATION_TITLE, navigateToMap, navigateToZielonaBrama } from "../Location"
import "./locationMobile.css"

export const LocationMobile = () => {

    return <section
        id="location"
        className="h-screen w-full locationMobileContent">
        <div className="locationMobileText">
            <div className="locationMobileTitle">{LOCATION_TITLE}</div><br />
            <div className="locationMobileSubtitle">{LOCATION_SUBTITLE}</div>
            <div className="locationMobileDescription">{LOCATION_DESCRIPTION}</div>
             <div className="locationMobileMapButton">
                <PeachButton text="Zobacz na mapie" onClick={navigateToMap} />
            </div>
        </div>
        <div className="locationMobileImages">
            <img className="locationMobileMainImage" src="/images/zdjecie_sali_mobile.png" onClick={navigateToZielonaBrama} />
            <img className="locationMobileMapImage" src="/images/mapa.png" onClick={navigateToMap} />
        </div>
    </section>
}