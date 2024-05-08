import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-container'>
        <div class="contact-container">
            <form className='contact-form'>
                <h3 className='contact-form-heading'><span className='heading-span'>Contact</span> Us</h3>
                <p>For any queries feel free to contact us.</p>
                <ul className='contact-ul'>
                    <li className='contact-li'>
                        <label for="name"><span>Name <span class="required-star">*</span></span></label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                        <input type="email" id="mail" name="user_email"/>
                    </li>
                    <li>
                        <label for="msg"><span>Message</span></label>
                        <textarea rows="4" cols="50"></textarea>
                    </li>
                    <li>
                        <button>Contact Now!</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
  )
}

export default Contact