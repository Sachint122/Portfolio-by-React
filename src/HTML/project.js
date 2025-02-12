import { useState, useEffect, useRef, React } from 'react';
import '../style/project.css';
import project1 from '../image/project/home.jpg'
import project2 from '../image/project/Library.png'
import project3 from '../image/project/Pattern.png'
import project4 from '../image/project/Destination.png'
import project5 from '../image/project/E-commorce.png'
export default function Project() {
    const [height, setHeight] = useState("10px");
    const contentRef = useRef(null);  // Reference to the content container

    useEffect(() => {
        const timeout = setTimeout(() => {
            // Get the actual height of the content and set it
            if (contentRef.current) {
                setHeight(`${contentRef.current.scrollHeight}px`);
            }
        }, 10);

        return () => clearTimeout(timeout);
    }, []);
    const DivStyles = {
        height: height,
        transition: "height 2s ease-in-out",
        overflow: "hidden",
    };
    const projects = [
        {
            title: "Library Management System",
            link: "https://github.com/Sachint122/webapp.git",
            description: "A full-stack web application designed to manage books, users, and transactions efficiently. Built using Node.js, Express, MongoDB, and Bootstrap, this system supports book issuance, return tracking, and user authentication. It provides a user-friendly dashboard for librarians and students, ensuring smooth operations and reducing manual workload.",
            image: project2
        },
        {
            title: "C++ Pattern Generator",
            link: "https://github.com/Sachint122/C_C-Projects/blob/main/Pattern%20genrating%20using%20AI.CPP",
            description: "A console-based application developed in C++ that dynamically generates different pattern designs. It includes pre-defined patterns such as pyramids, diamonds, numeric sequences, and custom user-defined patterns. This project demonstrates logic-building and problem-solving skills, making it useful for beginners learning loops and recursion in C++.",
            image: project3
        },
        {
            title: "Destination Technology Institute Website",
            link: "https://github.com/Sachint122/Destination-by-React.git",
            description: "A responsive educational website built for the Destination Technology Institute, featuring course details, student resources, and admission information. The site is optimized for both desktop and mobile devices, providing a seamless browsing experience. It incorporates modern UI/UX design principles, ensuring an engaging and professional look.",
            image: project4
        },
        {
            title: "E-commerce Console-Based Website (Java)",
            link: "https://github.com/Sachint122/E_Commerce.git",
            description: "A Java-based console application that simulates an e-commerce store where users can browse products, add them to a cart, and place orders. Built with object-oriented programming (OOP) principles, the project includes features like inventory management, order processing, and a user-friendly menu-driven interface.",
            image: project5
        }
    ];
    const homeApp = {
        title: "Home Automation App",
        link: "https://github.com/Sachint122/Home-Automation.git",
        description: "A mobile application developed in Android Studio that allows users to remotely control home electrical appliances. It utilizes Bluetooth and IoT integration to enable seamless automation, enhancing convenience and energy efficiency. The app includes features such as real-time device status updates, scheduling, and security alerts for unauthorized access.",
        image: project1
    };
    return (
        <>
            {/* <!-- Projects Section --> */}
            <div className="projectMAIN" style={DivStyles} ref={contentRef}>
                <h2>Projects</h2>

                {projects.map((project, index) => (
                    <div className="project-wrapper" key={index}>
                        <div className="left">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="right">
                            <div className="projectdiv">
                                <h3>{project.title}</h3>
                                <div className="projectlink">
                                    <a href={project.link} target="_blank" rel="noreferrer">Link</a>
                                </div>
                            </div>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
                <div className="project-wrapper">
                    <div className="leftHome">
                        <img className="homeApp" src={homeApp.image} alt={homeApp.title} />
                    </div>
                    <div className="right">
                        <div className="projectdiv">
                            <h3>{homeApp.title}</h3>
                            <div className="projectlink">
                                <a href={homeApp.link} target="_blank" rel="noreferrer">Link</a>
                            </div>
                        </div>
                        <p>{homeApp.description}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
