import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import FrontPage from "../components/FrontPage"
 
const IndexPage = () => (
  <HeaderFooterLayout activeTab="Naslovna">
    {/* Body components here! */}
    <FrontPage/>
  </HeaderFooterLayout>

)
 
export default IndexPage