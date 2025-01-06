import { openUrl } from "../../../App"
import { isMobile } from "../../../util/isMobile"
import { LocationDesktop } from "./desktop/LocationDesktop"
import { LocationMobile } from "./mobile/LocationMobile"

const MAP_URL = 'https://maps.app.goo.gl/TCPSt38Gr9c77hmf9'
const ZIELONA_BRAMA_URL = 'https://zielonabrama.com.pl/'

export const Location = () => {

    return isMobile() ? <LocationMobile /> : <LocationDesktop />
}

export const navigateToMap = () => {
    openUrl(MAP_URL)
}

export const navigateToZielonaBrama = () => {
    openUrl(ZIELONA_BRAMA_URL)
}

export const LOCATION_TITLE = 'Przywidz, Zielona Brama'
export const LOCATION_SUBTITLE = 'Sala Sopocka'
export const LOCATION_DESCRIPTION = <>
    Nasza ceremonia zaślubin odbędzie się pod chmurką, tuż obok sali weselnej.
    <br /><br />
    Po ceremonii serdecznie zapraszamy Was na przyjęcie weselne, które odbędzie się w Sali Sopockiej tuż obok! 🥂🎶
</>