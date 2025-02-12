import React, { useState, useEffect } from "react";
export default function Skills() {
    const [height, setHeight] = useState("10px");
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHeight("950px");
        }, 10); // Small delay to trigger transition
        return () => clearTimeout(timeout); // Clean up timeout when unmounting
    }, []); // Run effect only on mount
    const DivStyles = {
        height: height,
        transition: "height 2s ease-in-out",
        overflow: "hidden"
    }
    const Languages = [
        "Java",
        "JavaScript",
        "C Basic",
        "C++ Basic",
        "Python Basic",
    ];
    const Frameworks = [
        "React js",
        "Tailwind",
        "Bootstrap",
        "Express.js",
    ];
    const Frontends = [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Tailwind",
        "React JS",
    ];
    const other = [
        "Teamwork",
        "Leadership",
        "Problem-Solving",
        "Creative Thinking",
        "User Experience Design",
    ];
    return (
        <>
            <div className="MAIN" style={DivStyles}>
                <h2>My Skills</h2>
                <h3>Programming Languages</h3>
                <ul>
                    {Languages.map((lang, i) => (
                        <li key={i}>
                            <i > {lang}</i>
                        </li>
                    ))}
                </ul>

                <h3>Frameworks</h3>
                <ul>
                    {Frameworks.map((framework, i) => (
                        <li key={i}>
                            <i>{framework}</i>
                        </li>
                    ))}
                </ul>

                <h3>Databases</h3>
                <ul>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                </ul>

                <h3>Frontend Development</h3>
                <ul>
                    {Frontends.map((frontend, i) => (
                        <li key={i}>
                            <i>{frontend}</i>
                        </li>
                    ))}
                </ul>

                <h3>Other Skills</h3>
                <ul>
                    {other.map((skill, i) => (
                        <li key={i}>
                            <i>{skill}</i>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
