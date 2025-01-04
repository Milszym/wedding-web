import { PeachButton } from "../../common/PeachButton"
import "./weddingWitnesses.css"

export const WeddingWitnesses = () => {

    return <section
        id="weddingWitnesses"
        className="h-screen w-full flex flex-col items-center justify-center weddingWitnesses">
        <div className="weddingWitnessesTitle">Świadkowie</div>
        <div className="weddingWitnessesDescription">Nie ma wesele bez świadków, a więc mamy zaszczyt przedstawić Wam te wyjątkowe osoby.</div>
        <div className="weddingWitnessesContent">
            <div className="firstWitness">
                <img className="witnessImage" src="/images/monika1.png" />
                <div className="witnessText">
                    Monika
                </div>
            </div>
            <div className="secondWitness">
                <img className="witnessImage" src="https://media.tenor.com/lDMve-IMXY8AAAAM/spongebob-squarepants-begging.gif" />
                <div className="witnessText">
                    Kuba
                </div>
            </div>
        </div>
    </section>
}