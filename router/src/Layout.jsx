import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Contact from './contact.jsx/Contact';
// import Github from './Github/Github';

function Layout() {
  return (
    <div>
      Layout
      <Header />
      <Outlet />
      <Contact/>
      {/* <Github/> */}
      <Footer />
    </div>
  );
}

export default Layout