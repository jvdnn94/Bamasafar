import React from 'react'
import Navbar from '../navbar/Nav'
import Footer from '../footer/Footer'

function SiteLayout({children}) {
  return (
    <div>
        <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default SiteLayout
