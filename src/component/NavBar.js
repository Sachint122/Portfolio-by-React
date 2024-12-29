import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar({ onContactClick }) {
    return (
        <div className="main">
            <span className="submain">
                <Link to="/">Home</Link>
            </span>
            <span className="submain">
                <Link to="/Contact" onClick={onContactClick}>Contact</Link>
            </span>
            <span className="submain">
                <Link to="/Internship" onClick={onContactClick}>Internship</Link>
            </span>
            <span className="submain">
                <Link to="/Project" onClick={onContactClick}>Projects</Link>
            </span>
            <span className="submain">
                <Link to="Eduacation.html" onClick={onContactClick}>Education</Link>
            </span>
            <span className="submain">
                <Link to="Skills.html" onClick={onContactClick}>Skills</Link>
            </span>
        </div>
    )
}
