import React from 'react'

import { Footer, Skills, Work, Testimonial, About, Header } from './containers/index.js'
import { Navbar } from './components/index.js'

const App = () => (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
    </div>
)

export default App
