import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'

const BaseLayout = ({children}:any) => {
const [showNav, setShowNav]= useState(true)

  return (
    <div>
        <Navbar showNav={showNav} setShowNav={setShowNav}/>
        <Sidebar/>
        <main
        className={`pt-16 transition-all duration-[400ms]`}>
        <div className="px-4 md:px-16">{children}</div>
        </main>
    </div>
  )
}



export default BaseLayout