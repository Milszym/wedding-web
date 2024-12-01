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
            <a className="btn btn-ghost nav-button"
            style={{fontWeight: 'bold', fontSize: '40px'}}
                onClick={() => scrollToSection("title")}>
                Dorota i Szymon
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li className="nav-button">
                    <a onClick={() => scrollToSection("location")}>Location</a>
                </li>
                <li className="nav-button">
                    <a onClick={() => scrollToSection("faq")}>FAQ</a>
                </li>
            </ul>
        </div>
    </nav>
}