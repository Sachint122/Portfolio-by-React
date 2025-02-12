import React from 'react';
import icon1 from '../image/name.png';
import icon2 from '../image/op.png';
import icon3 from '../image/phone.png';
import '../style/Form.css'
export default function Form() {
    return (
        <> 
            <form className="form">
                <div>
                    <p id="heading">Contact Me</p>
                    <p className="form-content">Fill this form to Touch of me</p>
                </div>
                <div className="field">
                    <img className="input-icon" src={icon1} alt="" />
                    <input autoComplete="off" placeholder="Enter Your Name" className="input-field" type="text" />
                </div>
                <div className="field">
                    <img className="input-icon" src={icon2} alt="" />
                    <input placeholder="Enter Your Email" className="input-field" type="email" />
                </div>
                <div className="field">
                    <img className="input-icon" src={icon3} alt="" />
                    <input placeholder="Enter Your Number" className="input-field" type="text" />
                </div>
                <div className="field">
                    <textarea placeholder="Enter Your Message" className="input-field"></textarea>
                </div>
                <button type="button" className="button3">Send</button>
            </form>
        </>
    );
}
