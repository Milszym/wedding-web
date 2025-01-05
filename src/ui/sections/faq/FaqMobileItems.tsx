import { FaqItem } from "./FaqItems"

interface FaqMobileItemsProps {
    mobileItems: FaqItem[]
}

export const FaqMobileItems = ({ mobileItems }: FaqMobileItemsProps) => {
    return <div className="carousel rounded-box faqMobileItems">
        {mobileItems.map((faqItem) => <div className="faqItemWrapper carousel-item">
            <div className="faqItem">
                <div className="faqItemTitle">
                    {faqItem.title}
                </div>
                <div className="faqItemDescription">
                    {faqItem.description}
                </div>
            </div>
        </div>)}
    </div>
}