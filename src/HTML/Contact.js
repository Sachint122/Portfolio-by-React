import { useState, useEffect, useRef, React } from 'react';
import '../style/contact.css'
import Form from './Form';
const styles = {
    height: "50px",
    transition: "height 2s ease-in-out",
}
export default function Contact() {
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
            <div className="formdiv" style={DivStyles} ref={contentRef}>
                <div id="book_input_detailsid ">
                   <Form/>
                </div>
            </div>
        </>
    )
}
