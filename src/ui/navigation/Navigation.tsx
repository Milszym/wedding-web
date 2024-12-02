import './navigation.css'


export const Navigation = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return <nav className="navbar bg-secondary">
        <div className="navbar-start">
            <div className="btn btn-ghost nav-button"
                style={{ fontWeight: 'bold', fontSize: '40px' }}
                onClick={() => scrollToSection("title")}>
                Dorota i Szymon
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li className="nav-button" onClick={() => scrollToSection("location")}>
                    Location
                </li>
                <li className="nav-button" onClick={() => scrollToSection("faq")}>
                    FAQ
                </li>
            </ul>
        </div>
    </nav>
}