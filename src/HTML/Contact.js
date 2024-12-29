import React, { useState, useEffect } from "react";
const styles = {
    fontsize: "20px"
}
export default function Contact() {
    const [height, setHeight] = useState("10px");
    useEffect(() => {
        const timeout = setTimeout(() => {
            setHeight("250px");
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
            <div className="form" style={DivStyles}>
                <div id="book_input_detailsid ">
                    <form id="addbook_inlibr" className="MAIN" method="post">
                        <label htmlFor="label1" className="field-label2-position">Enter Your Name:</label>
                        <input type="text" id="bookCode" name="bookCode" placeholder="Enter Your Name Here" />
                        <label htmlFor="label2" className="field-label3-position">Enter Your Contact:</label>
                        <input type="text" id="authorName" name="authorName" placeholder="Enter Your Contact Here" />
                        <textarea id="Massage" rows="4" placeholder="Type here..."></textarea>
                        <button type="submit" className="submit-button">Submit</button>
                        <button type="reset" className="reset">Reset</button>
                    </form>
                </div>
            </div>
        </>
    )
}
