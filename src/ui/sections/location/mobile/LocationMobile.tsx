import { useState } from "react"
import { PeachButton } from "../../../common/PeachButton"
import { LOCATION_DESCRIPTION, LOCATION_TITLE, navigateToMap, navigateToZielonaBrama } from "../Location"
import { ParkingDialog } from "../ParkingDialog"
import "./locationMobile.css"
import { useInView } from "react-intersection-observer"

export const LocationMobile = () => {

    const [parkingModalVisible, setParkingModalVisible] = useState(false)

    const [isVisible, setIsVisible] = useState(false);
    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView),
    });


    return <section
        id="location"
        className="h-screen w-full locationMobileContent">
        <div className="locationMobileTitle">{LOCATION_TITLE}</div><br />
        <div className="locationMobileDescription">{LOCATION_DESCRIPTION}</div>
        <div className="locationMobileMapButton">
            <PeachButton text="Zobacz na mapie" onClick={navigateToMap} />
        </div>
        <PeachButton className="locationMobileParkingButton" text="Parking" onClick={() => setParkingModalVisible(true)} />
        <div className="locationMobileImagesWrapper" ref={ref}>
            <img className={`locationMobileMainImage locationSlideInFromLeft${isVisible ? ` locationSlidedIn` : ''}`} src="/images/zdjecie_sali_full_alt.jpg" onClick={navigateToZielonaBrama} />
            <img className={`locationMobileSmallImage locationSlideInFromRight${isVisible ? ` locationSlidedIn` : ``}`} src="/images/zielona_brama_stajnia.jpg" onClick={navigateToZielonaBrama} />
        </div>
        {/* <div className="locationMobileImages">
            <img className="locationMobileMapImage" src="/images/mapa.png" onClick={navigateToMap} />
        </div> */}

        <ParkingDialog setParkingModalVisible={setParkingModalVisible} parkingModalVisible={parkingModalVisible} />
    </section>
}