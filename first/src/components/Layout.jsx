import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
    <Header/>
    <main className='min-h-[70vh] pt-16'>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}
