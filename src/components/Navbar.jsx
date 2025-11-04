import React, { useState } from 'react'
import { Link as LINK } from 'react-router-dom';
import { useGeneral } from '../context/GeneralContext';

export default function Navbar() {
  
  const { shops, setSearch, search, cart, isOpen, setIsOpen, filterProducts } = useGeneral();
  return (
    <div>
      {/* large secreen navbar */}
        <header className="flex items-center justify-between p-4 px-8 bg-gray-100 shadow-md z-50 sm:hidden md:flex fixed top-0 right-0 left-0">
        <LINK to="/" className='font-mono text-xl flex items-center gap-1'>
        <h1 className="text-3xl text-center text-blue-600">Katma</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-amber-500 size-8' viewBox="0 0 640 640"><path d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z"/></svg>
        </LINK>
        <div className='text-center w-full flex gap-8 items-center justify-center'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search shops and products...' className="text-lg text-gray-800 px-3 w-2/4 bg-gray-50 h-8 shadow-md rounded-sm mt-2 border-b-2 focus:outline-none border-gray-800" />
        
        {isOpen ?
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(false)} className='fill-gray-600 size-6 cursor-pointer' viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(true)} className='fill-blue-600 size-6 cursor-pointer' viewBox="0 0 640 640"><path d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64zM199 305C189.6 295.6 189.6 280.4 199 271.1C208.4 261.8 223.6 261.7 232.9 271.1L319.9 358.1L406.9 271.1C416.3 261.7 431.5 261.7 440.8 271.1C450.1 280.5 450.2 295.7 440.8 305L337 409C327.6 418.4 312.4 418.4 303.1 409L199 305z"/></svg>
            
          }
        </div>
        
        <nav className={`${!isOpen ? 'opacity-0 overflow-hidden flex transition-all duration-300 ease-in-out  gap-4 flex-col absolute top-16 right-64 bg-gray-50 shadow-md p-5 w-32 rounded-sm' : 'transition-all duration-300 ease-in-out  overflow-hidden flex gap-4 flex-col absolute top-16 right-64 opacity-100 bg-gray-50 shadow-md p-5 w-32 rounded-sm'}flex transition-all duration-300 ease-in-out overflow-hidden gap-4 flex-col absolute top-16 right-64 bg-gray-50 shadow-md p-5 w-32 rounded-sm opacity-0 `} >
          
        <LINK to="/" className='font-serif text-lg text-blue-900 transition-colors hover:text-blue-700'>Home</LINK>
        <LINK to="/Products" className='font-serif text-lg text-blue-900 transition-colors hover:text-blue-700'>Products</LINK>
        <LINK to="/Shops" className='font-serif text-lg text-blue-900 transition-colors hover:text-blue-700'>Shops</LINK>
        <LINK to="/about" className='font-serif text-lg text-blue-900 transition-colors hover:text-blue-700'>About</LINK>
        </nav>
        
        <LINK to="/cart">
        <div className=" w-fit flex items-center gap-0.5">
        <svg xmlns="http://www.w3.org/2000/svg"className='size-7 fill-amber-500 stroke-amber-800' viewBox="0 0 640 640"><path d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528zM336 142.4C322.7 142.4 312 153.1 312 166.4L312 200L278.4 200C265.1 200 254.4 210.7 254.4 224C254.4 237.3 265.1 248 278.4 248L312 248L312 281.6C312 294.9 322.7 305.6 336 305.6C349.3 305.6 360 294.9 360 281.6L360 248L393.6 248C406.9 248 417.6 237.3 417.6 224C417.6 210.7 406.9 200 393.6 200L360 200L360 166.4C360 153.1 349.3 142.4 336 142.4z"/></svg>
        <p className="text-lg text-blue-600 font-mono">({cart.length})</p>

        </div>
        </LINK>
        </header>

        {/* small screen navbar */}

        <header className="flex items-center justify-between p-4 bg-gray-100 shadow-md z-50 md:hidden fixed top-0 right-0 left-0">
          
          <div className="flex items-center gap-3">
        
        {isOpen ?
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(false)} className='fill-gray-600 size-6 cursor-pointer' viewBox="0 0 640 640"><path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/></svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsOpen(true)} className='fill-gray-600 size-6 cursor-pointer' viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
          }
          <LINK to="/" className='font-mono text-xl '>
        <div className="flex items-center gap-1">
        <h1 className="text-3xl text-center text-blue-600">Katma</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-amber-500 size-8' viewBox="0 0 640 640"><path d="M256 144C256 108.7 284.7 80 320 80C355.3 80 384 108.7 384 144L384 192L256 192L256 144zM208 192L144 192C117.5 192 96 213.5 96 240L96 448C96 501 139 544 192 544L448 544C501 544 544 501 544 448L544 240C544 213.5 522.5 192 496 192L432 192L432 144C432 82.1 381.9 32 320 32C258.1 32 208 82.1 208 144L208 192zM232 240C245.3 240 256 250.7 256 264C256 277.3 245.3 288 232 288C218.7 288 208 277.3 208 264C208 250.7 218.7 240 232 240zM384 264C384 250.7 394.7 240 408 240C421.3 240 432 250.7 432 264C432 277.3 421.3 288 408 288C394.7 288 384 277.3 384 264z"/></svg>
        </div>
        </LINK>
        </div>
        <nav className={`fixed top-16 flex flex-col gap-2 px-2 left-0 h-full w-64 bg-gray-50 text-slate-800 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}>
        <LINK to="/" className='font-serif text-xl text-blue-900 transition-colors hover:text-blue-700'>Home</LINK>
        <LINK to="/Products" className='font-serif text-xl text-blue-900 transition-colors hover:text-blue-700'>Products</LINK>
        <LINK to="/Shops" className='font-serif text-xl text-blue-900 transition-colors hover:text-blue-700'>Shops</LINK>
        <LINK to="/about" className='font-serif text-xl text-blue-900 transition-colors hover:text-blue-700'>About</LINK>
        </nav>
        <LINK to="/cart">
        <div className=" w-fit flex items-center gap-0.5">
        <svg xmlns="http://www.w3.org/2000/svg"className='size-7 fill-amber-500 stroke-amber-800' viewBox="0 0 640 640"><path d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528zM336 142.4C322.7 142.4 312 153.1 312 166.4L312 200L278.4 200C265.1 200 254.4 210.7 254.4 224C254.4 237.3 265.1 248 278.4 248L312 248L312 281.6C312 294.9 322.7 305.6 336 305.6C349.3 305.6 360 294.9 360 281.6L360 248L393.6 248C406.9 248 417.6 237.3 417.6 224C417.6 210.7 406.9 200 393.6 200L360 200L360 166.4C360 153.1 349.3 142.4 336 142.4z"/></svg>
        <p className="text-lg text-blue-600 font-mono">({cart.length})</p>

        </div>
        </LINK>
        </header>
    </div>
  )
}
