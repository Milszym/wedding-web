import WeddingImage from "./wedding_background.png"
import "./title.css"

export const Title = () => {
    return <section
        id="title"
        style={{backgroundColor: '#edcdb9'}}
        className="relative w-full h-screen"
        >
        <img src={WeddingImage} className="titleImage" alt="Description of the image" />
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl font-bold">Dorota i Szymon</h1>
        </div>
    </section>
}