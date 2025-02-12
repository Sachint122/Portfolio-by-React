import React from 'react'
import { Link } from 'react-router-dom';
import '../style/nav.css'
import Button from './ModernButton';
import myLogo from '../image/Jarvis.png'
export default function NavBar({ onContactClick }) {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={myLogo} alt="Logo"/>
            </div>
            <div>
                <ul className="nav-links">
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/Internship" onClick={onContactClick}>Internship</Link></li>
                    <li className="nav-item"><Link to="/Project" onClick={onContactClick}>Project</Link></li>
                    <li className="nav-item"><Link to="/Eduacation" onClick={onContactClick}>Eduacation</Link></li>
                    <li className="nav-item"><Link to="/Skills" onClick={onContactClick}>Skills</Link></li>
                    <li className="nav-item"><Link to="/Contact" onClick={onContactClick}>Contact Us</Link></li>
                </ul>
            </div>
            <div>
                <a  href="https://github.com/Sachint122"><Button text="Git Hub" /></a>
            </div>
        </nav>
    )
}
