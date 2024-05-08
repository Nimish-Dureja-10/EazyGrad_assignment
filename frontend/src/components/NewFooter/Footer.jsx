import React from 'react'
import "./Footer.css";
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-left-section'>
            <h2 className='footer-left-heading'>EazyGrad</h2>
            <p className='footer-left-p'>Built with ❤️ in India for the world</p>
            <div className='footer-form-container'>
                <h4 className='footer-form-heading'>Newsletter</h4>
                <p className='footer-form-p'>Subscribe for latest updates.</p>
                <form className='footer-form'>
                    <input className='footer-form-inputs' type={'text'} placeholder="Name" />
                    <input className='footer-form-inputs' type={'text'} placeholder="Email" />
                    <button className='subscribe-button'>Subscribe Now</button>
                </form>
                <p>Created By Nimish Dureja</p>
            </div>
        </div>
        <div className='footer-right-section'>
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
            <FooterLinks />
        </div>
    </div>
  )
}

export default Footer