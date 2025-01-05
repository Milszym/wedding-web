import { useState } from "react"
import "./faq.css"
import { FaqSection, faqSections } from "./FaqItems"
import { isMobile } from "../../../util/isMobile"
import { FaqMobileItems } from "./FaqMobileItems"

export const Faq = () => {

    const [selectedSection, setSelectedSection] = useState<FaqSection>(faqSections[0])
    const changeSection = (newSection: FaqSection) => {
        setSelectedSection(newSection)
    }

    return <section
        id="faq"
        className="h-screen w-full faqContent">
        <div className="faqTitle">Więcej informacji</div><br />
        <div className="faqSections">
            {faqSections.map((faqSection) => <div className={`faqSection${selectedSection == faqSection ? ` faqSelectedSection` : ''}`}
                onClick={() => changeSection(faqSection)}>
                {faqSection.name}
            </div>)}
        </div>
        {isMobile() ? <FaqMobileItems mobileItems={selectedSection.faqItems} /> : <div className="faqItems">
            {selectedSection.faqItems.map((faqItem) => <div className="faqItem">
                <div className="faqItemTitle">
                    {faqItem.title}
                </div>
                <div className="faqItemDescription">
                    {faqItem.description}
                </div>
            </div>)}
        </div>
        }
    </section>
}