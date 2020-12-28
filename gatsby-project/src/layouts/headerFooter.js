import React from 'react'
import NavigationHeader from '../modules/NavigationHeader'
import TitleImage from '../modules/TitleImage'
import Footer from '../modules/Footer'
 
const HeaderFooterLayout = ({children, activeTab}) => (
  <>
    <NavigationHeader activeTab={activeTab} />
    <TitleImage/>
      {children}
      
    <Footer />
  </>
)
 
export default HeaderFooterLayout
