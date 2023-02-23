'use client'
import React from 'react'
import Home from '../components/Home'
import "../components/global.css"
import Image from 'next/image'
export default function contact() {
  return (
    <>
    <Home title='Contact' src='/images/office.jpg'/>
  <div className="flex justify-center bg-gray-300">
<div className='mx-4 order-last self-center' >
<Image src='/Panaverse.png' width='80' height='80' alt='logo'></Image>
</div>
<div className='mx-4 self-center text-center'>
<h1 className="text-6xl font-bold text-blue-700">Welcome to Panaverse Dao!!</h1>
<h2 className="text-3xl font-semibold text-blue-300">Web 3 and metaverse Web community</h2>
<button className='my-4 px-4 border-2 border-black rounded-full '>Learn More</button>
</div>
</div>

<div className="flex justify-center bg-gray-300">
<div className="mx-4 order-last self-center">
<Image src='/Panaverse.png' width='80' height='80' alt='logo'/>
</div>
<div className="mx-4 self-center text-center">
  <h1 className='text-6xl font-bold text-blue-700'> Welcome to NorthBy</h1>
  <h2></h2>
</div>

</div>



    </>
  )
}