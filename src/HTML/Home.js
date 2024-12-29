import React from 'react'
import MyImage from '../image/MyImage.jpg';
export default function Home() {
  return (
    <>
    <div className="homeContent">
        <img src={MyImage} alt="MyImage"/>
        <div className="info">
            <h2>Hii!</h2>
            <h4>Welcome to My WebPage</h4>
        </div>
    </div>
    <div className="portfolio-section">
        <div className="portfolio-header">
            <p>Full Stack Developer | Android Enthusiast | Problem Solver</p>
        </div>
        <div className="portfolio-projects">
            {/* <!-- Project 1 --> */}
            <div className="project-card">
                <h2>Library Management System a</h2>
                <p>
                    Developed using Node.js, Express, MongoDB, and Bootstrap, this system streamlines library operations
                    with efficient book and user management.
                </p>
            </div>
            {/* <!-- Project 2 --> */}
            <div className="project-card">
                <h2>Home Automation App</h2>
                <p>
                    An Android application that allows seamless control of home electrical equipment through a
                    smartphone, enhancing convenience and efficiency.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}
