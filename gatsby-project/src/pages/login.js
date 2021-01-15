import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import LogIn from '../components/LogIn'
 
const loginPage = () => (
    <HeaderFooterLayout activeTab="Prijavi se">
        <LogIn/>
    </HeaderFooterLayout>
)
 
export default loginPage