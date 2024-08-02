import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navigation.css'

interface NavigationProps {
    onNavClick: (sectionId: string) => void;
}
export default function Navigation({onNavClick}: NavigationProps) {
    return (
        <ul className='nav-list'>
            <li><a href='/' className='nav-link' onClick={(e) => { e.preventDefault(); onNavClick('home'); }}>Home</a></li>
            <li><a href='/about' className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('about')}}>About</a></li>
            <li><a href='/skills/Skills' className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('skills')}}>Skills</a></li>
            <li><a href='/portfolio/Portfolio' className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('portfolio')}}>Portfolio</a></li>
            <li><a href='/experience' className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('experience')}}>Experience</a></li>
            <li><a href='/contact' className='nav-link' onClick={(e) => {e.preventDefault(); onNavClick('contact')}}>Contact</a></li>
        </ul>
    );
};
