import React from 'react'
import MyImage from '../image/MyImage.jpg';
// import '../style/home.css';
import '../style/home1.css';
export default function Home() {
    const project = [
        {
            title: "Library Management System",
            description: "A full-stack application built using Node.js, Express, MongoDB, and HTML, CSS for managing library operations efficiently.",
        },
        {
            title: "Home Automation App",
            description: "An Android application that allows seamless control of home electrical equipment through a smartphone, enhancing convenience and efficiency.",
        },
        {
            title: "Destination Technology Institute Website",
            description: "A responsive and modern website built using React for a technology institute, featuring an interactive UI and smooth user experience.",
        },
        {
            title: "Pattern Generator in C++",
            description: "A C++ program that generates various pattern designs, showcasing expertise in loops, logic building, and efficient algorithm implementation.",
        },
        {
            title: "E-commerce Console-Based Application",
            description: "A Java-based console application that simulates an e-commerce platform, allowing users to browse products, add to cart, and proceed to checkout.",
        }
    ];
    return (
        <>
            <div className="homeContent">
                <img src={MyImage} alt="MyImage" />
                <div className="info">
                    <h2>Hi, I’m Sachin Tiwari</h2>
                    <p>a passionate Full-Stack Developer with expertise in Java, JavaScript, and Web Development. I love crafting efficient and user-friendly applications. Let’s build something amazing together!</p>
                </div>
            </div >
            <div className="portfolio-section">
                <div className="portfolio-header">
                    <p>👨‍💻 Full-Stack Developer | Java | Web Technologies| Problem Solver</p>
                </div>
                <div className="portfolio-projects">
                    {project.map((item, index) => (
                        <div className="project-card" key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
