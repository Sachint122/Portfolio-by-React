import React, { useState, useEffect } from "react";

export default function Skills() {
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
     <div className="MAIN" style={DivStyles}>
        <h2>My Skills</h2>
        <h3>Programming Languages</h3>
        <ul>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
        </ul>

        <h3>Frameworks</h3>
        <ul>
            <li>Spring Boot</li>
            <li>Hibernate</li>
            <li>AngularJS</li>
            <li>Node.js</li>
            <li>Express.js</li>
        </ul>

        <h3>Databases</h3>
        <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
        </ul>

        <h3>Frontend Development</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
        </ul>

        <h3>Other Skills</h3>
        <ul>
            <li>Full-stack Development</li>
            <li>API Integration</li>
            <li>Debugging and Testing</li>
        </ul>
    </div>
    </>
  )
}
