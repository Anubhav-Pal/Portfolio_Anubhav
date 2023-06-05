import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './about.scss'

const abouts = [
  {
    title: "Web DEvelopment",
    desc: "I am a good web developer",
    imgURL: images.about01
  },
  {
    title: "Web DEvelopment",
    desc: "I am a good web developer",
    imgURL: images.about02
  },
  {
    title: "Web DEvelopment",
    desc: "I am a good web developer",
    imgURL: images.about03
  },
  {
    title: "Web DEvelopment",
    desc: "I am a good web developer",
    imgURL: images.about04
  },
]
const about = () => (
  <>
    <h2 className='head-text'>
      I know that <span>Good development</span> <br /> means <span>Good Business</span>
    </h2>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
          className='app__profile-item'
          key={about.title + index}
        >
          <img src={about.imgURL} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <h2 className="p-text" style={{ marginTop: 10 }}>{about.desc}</h2>
        </motion.div>
      ))}
    </div>
  </>
)

export default about