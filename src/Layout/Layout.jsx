import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { Logo } from '../components'

const Layout = () => {
  return (
    <div>
        <Logo />
        <Header />
        <Outlet />
        <Footer />

    </div>
  )
}

export default Layout