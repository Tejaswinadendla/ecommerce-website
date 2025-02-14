import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterester_icon from '../assets/pintester_icon.png'
import whattsapp_icon from '../assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-logo">
    <img src={footer_logo} alt=""/>
    <p>SHOPPER</p>
</div>
<ul className="footer-links">
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className="footer-social-icon">
    <div className="footer-icons-container">
        <img src={instagram_icon} alt=""/>
    </div>
    <div className="footer-icons-container">
        <img src={pinterester_icon} alt=""/>
    </div>
    <div className="footer-icons-container">
        <img src={whattsapp_icon} alt=""/>
    </div>
</div>
<div className="footer-copyright">
    <hr/>
    <p>copyright @2024-All rights reserved.</p>
</div>
    </div>
  )
}
export default Footer
