import React from 'react'
import FooterLayout from '@/components/footer-layout'
import InputHeader from '@/components/input-header'
import './index.css'


const Layout: React.FC = () => {

  return (
    <div className='container'>
      <InputHeader />
      <FooterLayout />
    </div>
  )
}


export default Layout