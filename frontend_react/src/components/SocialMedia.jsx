import React from 'react'
import { BsTwitter, BsBehance, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/anubhavpal/"><div><BsLinkedin /></div></a>
            </div>
            <div>
                <a href="https://www.behance.net/anubhavpal3"><div><BsBehance /></div></a>
            </div>
            <div>
                <a href="https://twitter.com/AnubhavPal__"><div><BsTwitter /></div></a>
            </div>
        </div>
    )
}

export default SocialMedia