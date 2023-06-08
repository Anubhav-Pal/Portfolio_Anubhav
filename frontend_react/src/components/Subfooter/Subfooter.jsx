import React from 'react'
import './subfooter.scss'

const Subfooter = () => {
    const date = new Date().getFullYear();
    return (
        <div className='app__flex app__subfooter'>
            <div className="app__subfooter-developer p-text">Developed with ❤️ by Anubhav Pal</div>
            <div className="app__subfooter-copyright p-text">© {date} - All rights reserved</div>
        </div>
    )
}

export default Subfooter