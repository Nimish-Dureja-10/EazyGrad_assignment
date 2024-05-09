import React,{useState} from 'react'
import axios from "axios";
import "./Contact.css";

const Contact = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mes,setMessage] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:5000/api/v1/contact`,{
                name,email,mes
            });
            if(res) {
                alert(`${name} your message has been sent`);
            }
            setName("");
            setEmail("");
            setMessage("");
        }catch(error) {
            console.log(error);
            alert(error);
        }
    }

  return (
    <div className='contact-container'>
        <div class="contact-container">
            <form className='contact-form'>
                <h3 className='contact-form-heading'><span className='heading-span'>Contact</span> Us</h3>
                <p>For any queries feel free to contact us.</p>
                <ul className='contact-ul'>
                    <li className='contact-li'>
                        <label for="name"><span>Name <span class="required-star">*</span></span></label>
                        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </li>
                    <li>
                        <label for="mail"><span>Email <span class="required-star">*</span></span></label>
                        <input type="email" id="mail" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </li>
                    <li>
                        <label for="msg"><span>Message</span></label>
                        <textarea rows="4" cols="50" value={mes} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    </li>
                    <li>
                        <button onClick={handleClick}>Contact Now!</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
  )
}

export default Contact