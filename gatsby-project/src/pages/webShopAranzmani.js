import React from 'react'
import HeaderFooterLayout from '../layouts/headerFooter'
import WebShopAranzmaniNew from '../modules/WebShopAranzmaniNew'
 
const webShopAranzmani = () => (
  <main>
    <HeaderFooterLayout activeTab="Web shop" >
        <WebShopAranzmaniNew />
    </HeaderFooterLayout>
  </main>
)
 
export default webShopAranzmani