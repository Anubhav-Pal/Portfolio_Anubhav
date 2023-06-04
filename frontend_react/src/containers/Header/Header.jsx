import React from 'react'
import './header.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app_header app_flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'>

        {/* Badge container */}
        <div className="app__header-badge">
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className="head-text">Anubhav</h1>
            </div>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
          <p className="p-text">UI/UX Designer</p>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'>
        <img src={images.profile} alt="profile-bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt='prifle_cirlce'
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app_header-circles'>
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className="circle-cmp app_flex" key={`circles-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>




    </div>
  )
}

export default Header