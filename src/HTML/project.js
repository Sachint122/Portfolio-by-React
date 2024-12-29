import React, { useState, useEffect } from "react";

export default function Project() {
    const [height, setHeight] = useState("10px");
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHeight("550px");
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
     {/* <!-- Projects Section --> */}
    <div className="MAIN" style={DivStyles}>
        <h2>Projects</h2>

        {/* <!-- Library Management System --> */}
        <div>
            <h3>Library Management System</h3>
            <p>
                <strong>Technologies Used:</strong> Node.js, Express.js, MongoDB, HTML, CSS, JavaScript, Bootstrap
            </p>
            <p>
                A comprehensive system for managing library operations, including book inventory, user management, and
                transaction tracking. The project structure includes:
            </p>
            <ul>
                <li>Introduction to the system and its objectives</li>
                <li>System analysis to identify requirements</li>
                <li>Justification for technology selection</li>
                <li>Detailed program code and testing processes</li>
                <li>Results, discussion, and final conclusions</li>
            </ul>
        </div>

        {/* <!-- Home Automation App --> */}
        <div>
            <h3>Home Automation App</h3>
            <p>
                <strong>Technologies Used:</strong> Android Studio
            </p>
            <p>
                A smart home solution enabling users to control electrical appliances using a smartphone. This app
                emphasizes:
            </p>
            <ul>
                <li>Simple and intuitive user interface design</li>
                <li>Seamless connectivity with home devices</li>
                <li>Reliable and efficient performance for smart home control</li>
            </ul>
        </div>
    </div>
    </>
  )
}
