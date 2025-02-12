import React, { useState, useEffect } from "react";
import '../style/contact.css'
import Form from './Form';
const styles = {
    height: "50px",
    transition: "height 2s ease-in-out",
}
export default function Contact() {
    const [height, setHeight] = useState("10px");
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHeight("450px");
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
            <div className="contact-info">
                <h2>Contact Me</h2>
                <p style={styles}>If you'd like to connect, here's how you can reach me:</p>
                <ul>
                    <li><strong>Phone:</strong> <a href="tel:+918081731062">8081731062</a></li>
                    <li><strong>Email:</strong> <a href="mailto:sachintiwari.751858@gmail.com">sachintiwari.751858@gmail.com</a>
                    </li>
                </ul>
                <p className="unique-message">"Let’s collaborate and create something amazing together. Reach out to me today!"</p>
            </div>
            <div className="formdiv" style={DivStyles}>
                <div id="book_input_detailsid ">
                   <Form/>
                </div>
            </div>
        </>
    )
}
