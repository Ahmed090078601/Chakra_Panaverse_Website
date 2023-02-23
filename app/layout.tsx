'use client'

import { ChakraProvider } from "@chakra-ui/react";
import Header from './components/header'
import Header2 from './components/header2'
import Footer from './components/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <ChakraProvider> 
        {/* <Header2/> */}
        <Header/>
        {children}
        <Footer/>
        </ChakraProvider>
      {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
     
     
       
        </body>
    
    </html>
  )
}