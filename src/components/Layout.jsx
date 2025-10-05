import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './header'
const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <div className='mt-10'><Footer /></div>
        
    </div>
  )
}

export default Layout