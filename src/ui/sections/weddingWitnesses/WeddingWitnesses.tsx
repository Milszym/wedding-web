import { useState } from "react"
import { PeachButton } from "../../common/PeachButton"
import "./weddingWitnesses.css"
import { useInView } from "react-intersection-observer";

export const WeddingWitnesses = () => {

    const [isVisible, setIsVisible] = useState(false);

    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setIsVisible(inView),
    });

    return <section
        id="weddingWitnesses"
        className="h-screen w-full flex flex-col items-center justify-center weddingWitnesses">
        <div className="weddingWitnessesTitle">Świadkowie</div>
        <div className="weddingWitnessesDescription">Nie ma wesele bez świadków, a więc mamy zaszczyt przedstawić Wam te wyjątkowe osoby.</div>
        <div className="weddingWitnessesContent">
            <div className={`firstWitness witnessSlideInFromLeft${isVisible ? ' witnessSlidedIn' : ''}`} ref={ref}>
                <img className="witnessImage" src="/images/monika1.png" />
                <div className="witnessText">
                    Monika
                </div>
            </div>
            <div className={`secondWitness witnessSlideInFromRight${isVisible ? ' witnessSlidedIn' : ''}`} >
                <img className="witnessImage" src="https://media.tenor.com/lDMve-IMXY8AAAAM/spongebob-squarepants-begging.gif" />
                <div className="witnessText">
                    Kuba
                </div>
            </div>
        </div>
    </section>
}