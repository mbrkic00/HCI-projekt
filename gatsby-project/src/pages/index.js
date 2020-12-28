import React from "react"
import NavigationHeader from '../components/NavigationHeader'
import TitleImage from "../components/TitleImage"
import Footer from '../components/Footer'
import FrontPage from '../components/FrontPage'
const IndexPage = () => (
  <main>
    {/*<p style={{paddingLeft: '3rem'}}>Online cvjećarnica u izradi...</p>*/}
    <NavigationHeader activeTab = "Naslovna"/>
    <TitleImage/>
    <FrontPage/>
    <Footer/>
  </main>
)

export default IndexPage
