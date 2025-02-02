import "./title.css"
import { Countdown } from "./Countdown"
import { isMobile } from "../../../util/isMobile"
import { PeachButton } from "../../common/PeachButton"
import { MainConfig } from "../../../config/MainConfig"
import { useTranslation } from "react-i18next"

export const Title = () => {

    const { t } = useTranslation()

    const addEventToGoogleCalendar = () => {
        const event = {
            title: t('title.calendarEventName'),
            description: t('title.calendarEventDescription'),
            location: MainConfig.title.calendarEventLocation,
            startTime: MainConfig.title.exactStartDate,
            endTime: MainConfig.title.exactEndDate,
        };

        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startTime.replace(/-|:|\./g, '')}/${event.endTime.replace(/-|:|\./g, '')}`;

        window.open(googleCalendarUrl, '_blank');
    };

    const imagePath = isMobile() ? '/images/zdjecie_z_wesela_cropped.jpg' : '/images/zareczyny_cropped.jpg'

    return <section id="title" className="w-full h-screen titleSection">
        <img className="titleBg" src={imagePath} />
        <div className="titleOverlay" />
        <div className="titleContent">
            <div className="titleTexts">
                <h1 className="title">{t('title.names')}</h1>
                <br />
                <div className="titleDate" onClick={addEventToGoogleCalendar}>
                    {t('title.date')}
                </div>
                <div className="titleHour" onClick={addEventToGoogleCalendar}>
                    {MainConfig.title.hour}
                </div>
                <div className="titleCalendarButtonWrapper">
                    <PeachButton className="titleCalendarButton"
                        outline={true}
                        text={t('title.addEventToCalendar')}
                        onClick={addEventToGoogleCalendar} />
                </div>
                {!isMobile() && <div className="titleCountdown">
                    <Countdown targetDate={MainConfig.marriageDate} addEventToGoogleCalendar={addEventToGoogleCalendar} />
                </div>}
            </div>
            {isMobile() && <div className="titleCountdown">
                <Countdown targetDate={MainConfig.marriageDate} addEventToGoogleCalendar={addEventToGoogleCalendar} />
            </div>}
        </div>
    </section>
}