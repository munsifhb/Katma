import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col">
        <div className="flex md:flex-row sm:flex-col bg-blue-600 justify-around items-center py-12 px-8 md:px-8 sm:px-2 gap-5">
      <div className='flex justify-around w-full'>
      <article className="flex-col">
        <p className="text-white text-xl">About Us</p>
        <p className="text-gray-50">Contact</p>
        <p className="text-gray-50">Services</p>
        <p className="text-gray-50">About</p>
      </article>
    
    <article className="flex-col">
        <p className="text-white text-xl">Business</p>
        <p className="text-gray-50">Marketing</p>
        <p className="text-gray-50">Services</p>
        <p className="text-gray-50">About</p>
      </article>
      </div>

      <div className="">
        <h1 className="text-white text-xl">Get in touch</h1>
        <input type="text" placeholder='Type..' className="w-full h-10 md:w-64 p-2" />
      </div>
      </div>
        <div  className='font-mono text-xl flex items-center gap-1 bg-gray-50 justify-center'>
                <h1 className="text-3xl text-center text-blue-600">Katma</h1>
                <svg xmlns="http://www.w3.org/2000/svg" className='fill-amber-500 size-8' viewBox="0 0 640 640"><path d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z"/></svg>
                </div>
      </footer>
    </div>
  )
}
