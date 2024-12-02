import './navigation.css'


export const Navigation = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return <nav className="navbar bg-secondary">
            <ul className="menu menu-horizontal px-1" style={{flex: 1, justifyContent: 'center'}}>
                <li className="nav-button" onClick={() => scrollToSection("location")}>
                    <div>Location</div>
                </li>
                <li className="nav-button" onClick={() => scrollToSection("faq")}>
                    <div>FAQ</div>
                </li>
            </ul>
    </nav>
}