export const Faq = () => {
    return <section
        id="faq"
        style={{backgroundColor: '#edcdb9'}}
        className="w-full py-16 flex flex-col items-center"
    >
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="w-full max-w-4xl">
            <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What is DaisyUI?
                </div>
                <div className="collapse-content">
                    <p>DaisyUI is a Tailwind CSS component library.</p>
                </div>
            </div>

            <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    How do I install DaisyUI?
                </div>
                <div className="collapse-content">
                    <p>
                        Install it via npm or yarn: `npm install daisyui` or `yarn add
                        daisyui`.
                    </p>
                </div>
            </div>

            <div className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Can I customize DaisyUI components?
                </div>
                <div className="collapse-content">
                    <p>
                        Yes, you can customize DaisyUI components using Tailwind
                        classes or your own configurations.
                    </p>
                </div>
            </div>
        </div>
    </section>
}