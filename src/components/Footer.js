import React from 'react'
import {
        FiTwitter, FiGithub, FiLinkedin, FiInstagram,
        FiYoutube, FiFacebook
       } from 'react-icons/fi'
import '../css/footer.css'

function Footer() {
    
    return (
        <div className='footer__container'>
            <div className='footer__links'>
                <a href='/#'><b>Help</b></a>
                <a href='/#'><b>About</b></a>
                <a href='/#'><b>Start Writing</b></a>
                <a href='/#'><b>Sponsor</b>:</a>
                <a href='/#'>Brand-as-Author</a>
                <a href='/#'>Sitesibe Billboard</a>
                <a href='/#'>Ad by tag</a>
                <a href='/#'>Newsletter</a>
                <a href='/#'>Noonies</a>
                <a href='/#'>Contact Us</a>
                <a href='/#'>Terms</a>
                <a href='/#'>Privacy</a>
                <a href='/#'>Cookies</a>
                <a href='/#'>Stories published yesterday</a>
                <a href='/#'>Leaderboard</a>
                <a href='/#'>contributions'Club</a>
                <a href='/#'>Chrome Extension</a>
            </div>
            <div className='footer__social__links'>
                <a href='/#'><FiLinkedin className='social__icon' /></a>
                <a href='/#'><FiFacebook className='social__icon' /></a>
                <a href='/#'><FiTwitter className='social__icon' /></a>
                <a href='/#'><FiGithub className='social__icon' /></a>
                <a href='/#'><FiYoutube className='social__icon' /></a>
                <a href='/#'><FiInstagram className='social__icon' /></a>
            </div>
        </div>
    )
}

export default Footer