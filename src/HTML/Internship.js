import React, { useState, useEffect } from "react";
export default function Internship() {
    const [height, setHeight] = useState("10px");
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHeight("650px");
        }, 10); // Small delay to trigger transition
        return () => clearTimeout(timeout); // Clean up timeout when unmounting
    }, []); // Run effect only on mount
    const DivStyles={
        height: height,
        transition: "height 2s ease-in-out",
        overflow: "hidden"
    }
    return (
        <>
            {/* <!-- Internship and Experience Section --> */}
            <div className="MAIN" style={DivStyles}>
                <h2>Internship and Experience</h2>
                <h3>Internship</h3>
                <p><strong>Role:</strong> Java Full Stack Developer at <em>Codegan</em></p>
                <p>
                    During my internship at Codegan, I worked on:
                    <ul>
                        <li>Developing and maintaining web applications using Java, Spring Boot, and Hibernate.</li>
                        <li>Designing user interfaces with HTML, CSS, and JavaScript frameworks like AngularJS.</li>
                        <li>Implementing RESTful APIs for seamless communication between frontend and backend.</li>
                        <li>Testing and debugging applications to ensure optimal performance and security.</li>
                    </ul>
                    This experience enhanced my understanding of full-stack development and collaborative software projects.
                </p>

                <h3>Work Experience</h3>
                <p><strong>Role:</strong> Team Member at <em>Suzuki Car Manufacturing</em></p>
                    At Suzuki, I contributed to:
                    <ul>
                        <li>Learning and supporting manufacturing processes for car assembly lines.</li>
                        <li>Participating in quality control checks to ensure product standards were met.</li>
                        <li>Collaborating with team members to meet daily production targets efficiently.</li>
                    </ul>
                    <p>
                        This role strengthened my problem-solving skills, adaptability, and teamwork in a fast-paced industrial
                        setting.
                    </p>
            </div>
        </>
    )
}
