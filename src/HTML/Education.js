import React, { useState, useEffect } from "react";

export default function Education() {
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
     {/* <!-- Education Section --> */}
    <div className="MAIN" style={DivStyles}>
        <h2>Education</h2>

        {/* <!-- ITI Details --> */}
        <h3><a href="https://ncvtmis.gov.in/pages/home.aspx">NCVT ITI</a></h3>
        <p><strong>Institution:</strong> NCVT</p>
        <p><strong>Qualification:</strong> ITI</p>
        <p><strong>Percentage:</strong> 93%</p>
        <p><strong>Details:</strong> I completed my ITI from NCVT with a focus on technical skills, achieving a 93%
            score. The course equipped me with practical knowledge and hands-on experience in various aspects of
            industrial technology, boosting my technical proficiency.</p>

        {/* <!-- MGKVP Varanasi Details --> */}
        <h3><a href="https://www.mgkvp.ac.in/">MGKVP Varanasi</a></h3>
        <p><strong>Degree:</strong> Bachelor's Degree (or specify the degree if available)</p>
        <p><strong>Course:</strong> Specify your major or field of study</p>
        <p><strong>Year of Graduation:</strong> Specify year of graduation</p>
        <p><strong>Details:</strong> At MGKVP Varanasi, I focused on building a solid foundation in [your field of
            study], enhancing my theoretical knowledge and problem-solving skills. The university's curriculum helped me
            refine my analytical thinking and develop a deeper understanding of [relevant topics].</p>
    </div>
    </>
  )
}
