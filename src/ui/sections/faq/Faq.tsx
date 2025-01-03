import { faqItems } from "./FaqItems"
import "./faq.css"

export const Faq = () => {
    return <section
        id="faq"
        className="w-full py-16 flex flex-col items-center"
    >
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="w-full max-w-4xl">
            {faqItems.map((faqItem) => <div style={{ marginTop: '1em' }}>
                <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        {faqItem.title}
                    </div>
                    <div className="collapse-content">
                        {faqItem.description}
                    </div>
                </div>
            </div>)
            }
        </div>
    </section>
}