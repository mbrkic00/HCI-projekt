import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import LogIn from '../components/LogIn'
import FrontPage from '../components/FrontPage'
 
const loginPage = () => (
    <HeaderFooterLayout activeTab="Prijavi se">
        <FrontPage/>
        <LogIn/>
    </HeaderFooterLayout>
)
 
export default loginPage