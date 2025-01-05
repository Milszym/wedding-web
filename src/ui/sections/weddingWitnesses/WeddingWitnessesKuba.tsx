import { useEffect, useState } from "react"
import { PeachButton } from "../../common/PeachButton"
import "./weddingWitnesses.css"

export const WeddingWitnessesKuba = () => {

    const [kubaDialog, setKubaDialog] = useState(false)
    const [yesDialog, setYesDialog] = useState(false)
    const [noDialog, setNoDialog] = useState(false)

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
                <div className="witnessText" style={{ fontSize: '5vw' }}>
                    Kuba
                </div>
                <PeachButton onClick={() => setKubaDialog(true)} text="Kliknij!" />
            </div>
        </div>


        <dialog id="my_modal_1" className="modal" open={kubaDialog}>
            <div className="modal-box" style={{ fontFamily: 'Cormorant', fontWeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img className="witnessImage" src="/images/zdjecie_kuba.png" style={{ width: '60vw', height: '60vw' }} />
                <div className="witnessText" style={{ fontSize: '5vw' }}>
                    Hej, Kuba! Czy zostaniesz moim świadkiem na ślubie? Byłoby super. Kliknij tak, jeżeli się zgadzasz 😃 👀
                </div>
                <div>
                    <button className="btn btn-success" style={{ marginTop: '1em' }} onClick={() => {
                        setYesDialog(true)
                        setKubaDialog(false)
                    }}>Tak 🎉</button>
                    <button className="btn btn-warning" style={{
                        marginLeft: '1em',
                        marginTop: '1em'
                    }} onClick={() => {
                        setNoDialog(true)
                        setKubaDialog(false)
                    }}>Niestety nie 😥</button>
                </div>
            </div>
        </dialog>

        <dialog id="my_modal_2" className="modal" open={yesDialog}>
            <div className="modal-box" style={{ fontFamily: 'Cormorant', fontWeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="witnessText" style={{ fontSize: '5vw', marginBottom: '2em' }}>
                    Yaaaaaaaaaaaaay!!!! <br />🎉🎉🎉
                </div>
                <div>
                    <img className="witnessImage" src="/images/zdjecie_szymko.png" style={{
                        width: '25vw', height: '25vw',
                        position: 'absolute', top: '15vw',
                        right: '32vw',
                        border: 0,
                    }} />
                    <img src="https://media3.giphy.com/media/h8UyZ6FiT0ptC/giphy.gif"
                        style={{ width: '60vw', height: '60vw' }}
                    />
                </div>
            </div>
        </dialog>

        <dialog id="my_modal_3" className="modal" open={noDialog}>
            <div className="modal-box" style={{ fontFamily: 'Cormorant', fontWeight: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div className="witnessText" style={{ fontSize: '5vw', marginBottom: '6em' }}>
                    To nic nie szkodzi! 😉
                </div>
                <div>
                    <img className="witnessImage" src="/images/zdjecie_szymko_sad.png" style={{
                        width: '35vw', aspectRatio: '1',
                        position: 'absolute', bottom: '35vw',
                        right: '22vw',
                        border: 0,
                    }} />
                    <img src="https://content.imageresizer.com/images/memes/sad-kermit-meme-8.jpg"
                        style={{ width: '60vw', height: '60vw' }}
                    />
                </div>
            </div>
        </dialog>
    </section>
}