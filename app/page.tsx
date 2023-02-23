'use client'
import { Inter } from '@next/font/google'
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Body/>
      {/* <Footer /> */}
    </>

  )
}


