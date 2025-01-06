import { openUrl } from "../../../App"
import { PeachButton } from "../../common/PeachButton"
import "./memories.css"

const GALLERY_URL = 'https://drive.google.com/drive/folders/1-nlWIF4GRFl7ZAxh2sfVhma0JME5PKqM?usp=sharing'

export const Memories = () => {

    const navigateToGallery = () => {
        openUrl(GALLERY_URL)
    }

    return <section
        id="memories"
        className="h-screen w-full memoriesContent">
        <div className="memoriesText">
            <div className="memoriesTitle">Podziel się wspomnieniami</div><br />
            <div className="memoriesDescription">Podczas wydarzenia śmiało nagrywajcie i róbcie zdjęcia. Będzie nam miło jak podzielicie się nimi wrzucając je do zdalnego folderu:</div><br />
            <PeachButton text="Galeria" onClick={navigateToGallery} />
        </div>
        <div className="memoriesImageContainer">
            <img className="memoriesImage" src="/images/radosne_zdjecie.jpeg" />
        </div>
    </section>
}