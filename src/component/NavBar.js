import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';
import Button from './ModernButton';
import myLogo from '../image/Jarvis.png';

export default function NavBar({ onContactClick }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <img src={myLogo} alt="Logo" />
            </div>

            {/* Hamburger Menu */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <div className={menuOpen ? "bar open" : "bar"}></div>
                <div className={menuOpen ? "bar open" : "bar"}></div>
                <div className={menuOpen ? "bar open" : "bar"}></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li className="nav-item"><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li className="nav-item"><Link to="/Internship" onClick={() => { onContactClick(); setMenuOpen(false); }}>Internship</Link></li>
                <li className="nav-item"><Link to="/Project" onClick={() => { onContactClick(); setMenuOpen(false); }}>Project</Link></li>
                <li className="nav-item"><Link to="/Eduacation" onClick={() => { onContactClick(); setMenuOpen(false); }} >Education</Link></li>
                <li className="nav-item"><Link to="/Skills" onClick={() => { onContactClick(); setMenuOpen(false); }}>Skills</Link></li>
                <li className="nav-item"><Link to="/Contact" onClick={() => { onContactClick(); setMenuOpen(false); }}>Contact Us</Link></li>
            </ul>

            {/* GitHub Button */}
            <div className="nav-button">
                <a href="https://github.com/Sachint122" target="_blank" rel="noopener noreferrer">
                    <Button text="Git Hub" />
                </a>
            </div>
        </nav>
    );
}
