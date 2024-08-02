import React, { useState } from 'react';
import Navigation from "./Navigation";
import '../styles/Header.css'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (sectionId: string) => {
        toggleMenu();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <header>
            <div className={`menu-toggler ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar half start"></div>
                <div className="bar"></div>
                <div className="bar half end"></div>
            </div>

            <nav className={`top-nav ${isMenuOpen ? 'open' : ''}`}>
                <Navigation onNavClick={handleNavClick}/>
            </nav>

            <div className="landing-text">
                <h1>Jaime V. Rodriguez</h1>
                <h6>Software Developer | Innovator | Veteran</h6>
            </div>
        </header>
    );
};
