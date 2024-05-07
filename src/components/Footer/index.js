import './index.css'

import { LuCopyright } from "react-icons/lu";

const Footer = () => (
    <div className='footer-container'>
        <div className='copy-right-div'>
            <LuCopyright className='copy-icon' />
            <p className='footer-para'>Talup 2023. All rights reserved</p>
        </div>
        <div className='footer-items'>
            <p className='footer-para'>Terms & Conditions</p>
            <p className='footer-para'>Privacy Policy</p>
        </div>
    </div>
)

export default Footer