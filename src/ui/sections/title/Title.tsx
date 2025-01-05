import "./title.css"
import { Countdown } from "./Countdown"
import { MARRIAGE_DATE } from "../../../App"
import { isMobile } from "../../../util/isMobile"

export const Title = () => {

    const addEventToGoogleCalendar = () => {
        const event = {
          title: 'Ślub i wesele Doroty i Szymona',
          description: 'Ślub i wesele w Zielonej Bramie w Przywidzu. Do zobaczenia!',
          location: 'Zielona Brama, Przywidz',
          startTime: '2025-07-12T16:30:00',
          endTime: '2025-07-13T3:00:00',
        };
    
        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startTime.replace(/-|:|\./g, '')}/${event.endTime.replace(/-|:|\./g, '')}`;
    
        window.open(googleCalendarUrl, '_blank');
      };

    const imagePath = isMobile() ? '/images/zdjecie_z_wesela_cropped.jpg' : '/images/zareczyny_cropped.jpg'

    return <section id="title" className="w-full h-screen titleSection">
        <img className="titleBg" src={imagePath} />
        <div className="titleOverlay" />
        <div className="titleContent">
            <div>
                <h1 className="title">Dorota i Szymon</h1>
                <br />
                <div className="titleDate" onClick={addEventToGoogleCalendar}>
                    12 Lipca 2025
                </div>
                <div className="titleHour" onClick={addEventToGoogleCalendar}>
                    16:30
                </div>
                {!isMobile() && <div className="titleCountdown">
                    <Countdown targetDate={MARRIAGE_DATE} addEventToGoogleCalendar={addEventToGoogleCalendar}/>
                </div>}
            </div>
            {isMobile() && <div className="titleCountdown">
                <Countdown targetDate={MARRIAGE_DATE} addEventToGoogleCalendar={addEventToGoogleCalendar}/>
            </div>}
        </div>
    </section>
}