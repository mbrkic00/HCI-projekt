import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import BlogPage from "../components/BlogPage"
 
const blogPage = () => (
    <HeaderFooterLayout activeTab="Blog">
        <BlogPage/> 
    </HeaderFooterLayout>
    
)
 
export default blogPage