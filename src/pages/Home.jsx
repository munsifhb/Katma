import React from 'react'
import { useGeneral } from '../context/GeneralContext'
import { Link } from 'react-router-dom';


export default function Home() {
  const myStyle = {
    backgroundImage: "url('./images/background.jpeg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  const { shops, setSearch, search, filterShops, filterProducts, allProducts, isOpen, setIsOpen } = useGeneral();

  return (
    <div className="" onClick={() => setIsOpen(false)}>
    <div className='py-32 bg-gray-100 h-fit ' style={myStyle}>
        <div className='text-center'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search shops and products...' className=" md:hidden sm:flex text-lg text-gray-800 px-3 w-4/5 bg-gray-50 h-8 rounded-sm border-b-2 focus:outline-none shadow-md border-gray-800 mx-auto" />
        </div>
    <h1 className="text-4xl text-blue-600 w-3/5 md:w-3/5 sm:w-5/6 mx-auto  body mt-8 text-center font-semibold">Shop smarter in Katsina</h1>
    <p className=" font mt-8 text-center w-3/5 md:w-3/5 sm:w-4/5 mx-auto font-extralight text-blue-500 text-3xl ">Discover the best shops and products in Katsina with Katma all in one place.</p>
    
    <div class="flex justify-center mt-10">
      <Link to="/Products">
    <button className="bg-blue-600 text-gray-50 rounded-md transition-colors hover:bg-blue-500 self-center ease-in-out px-3 py-1 mt-12 mx-auto">
      <div className=" w-fit flex items-center gap-0.5">
        <p className="text-lg font-mono">Start Shopping</p>
        <svg xmlns="http://www.w3.org/2000/svg"className='size-7 fill-amber-500 stroke-amber-800' viewBox="0 0 640 640"><path d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528zM336 142.4C322.7 142.4 312 153.1 312 166.4L312 200L278.4 200C265.1 200 254.4 210.7 254.4 224C254.4 237.3 265.1 248 278.4 248L312 248L312 281.6C312 294.9 322.7 305.6 336 305.6C349.3 305.6 360 294.9 360 281.6L360 248L393.6 248C406.9 248 417.6 237.3 417.6 224C417.6 210.7 406.9 200 393.6 200L360 200L360 166.4C360 153.1 349.3 142.4 336 142.4z"/></svg>
        

        </div>
    </button>
    </Link>
    </div>
    </div>
    <div className='py-8 bg-gray-200'>

   {/* featured shops */}
   <div className="">
    <div className='mt-16 w-4/5 md:w-3/5 lg:w-4/5 sm:w-5/6 mx-auto'>
      <h2 className='text-2xl font-semibold text-blue-600 mb-6'>Featured Shops</h2>
      <div className='grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5'>
        {shops.slice(0,3).map((shop) => (
          <Link to={`/shop/${shop.id}`} onClick={() => setIsOpen(false)} key={shop.id} className="bg-white rounded-lg shadow-md p-2 overflow-hidden flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src={shop.image} alt={shop.name} className="w-full object-cover h-48 mb-4" />
            <h3 className="text-lg font-medium text-blue-800">{shop.name}</h3>
            <p className="text-sm text-gray-500">Category: {shop.category}</p>
          </Link>
        ))}
      </div>
   </div>
   </div>

   {/* featured products */}

    <div className='mt-28 w-4/5 md:w-3/5 lg:w-4/5 sm:w-5/6 mx-auto mb-16'>
      <h2 className='text-2xl font-semibold text-blue-600 mb-6'>Featured Products</h2>
      <div className='grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5'>
        {
          allProducts.slice(3,12).map((product) => (
          <Link to={`/product/${product.id}`} onClick={() => setIsOpen(false)} key={product.id} className="bg-white rounded-lg shadow-md p-2 overflow-hidden flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src={product.image} alt={product.name} className="w-full object-cover h-48 mb-4" />
            <h3 className="text-lg font-medium text-blue-800">{product.name}</h3>
            <p className="text-sm text-gray-500">₦{product.price}</p>
          </Link>
          ))
        }
      </div>
      </div>

      {search ? ( <div className="w-2/4 md:w-2/4 sm:w-4/5 md:top-20 sm:top-40 mx-auto bg-white h-60 rounded-md shadow-md overflow-x-hidden absolute top-20 left-0 right-0 p-4">
      <h1 className="text-xl text-gray-700">Search result:</h1>

      <div className="flex flex-col justify-between">

        <div className="flex flex-col">
         {filterShops.map((shop) => (
          <Link to={`/shop/${shop.id}`} key={shop.id} className="bg-white  p-2 overflow-hidden flex flex-col hover:bg-gray-100 transition-colors duration-300 ease-in-out">
            
            <h3 className="text-lg font-medium text-blue-800">{shop.name}</h3>
            
          </Link>
        ))}

        </div>

        <div className="flex flex-col">
        {filterProducts.map((product) => (
          
          <Link to={`/product/${product.id}`} key={product.id} className="bg-white   p-2 overflow-hidden flex flex-col hover:bg-gray-100 transition-colors duration-300 ease-in-out">
            
            <h3 className="text-lg font-medium text-blue-800">{product.name}</h3>
            </Link>
          ))
        }

      </div>
      </div>
      </div>

    
    )
        :
        // (<p className="text-center text-gray-500 text-xl font-bold">No shop or product match your search</p>)
        null
        }

    </div>

    <div className="p-5 bg-gray-50 ring-8 ring-blue-600">
      <h1 className="text-3xl font-mono text-center text-blue-600 font-semibold">Why Katma</h1>
      <div className="flex justify-center items-center gap-28 sm:flex-col md:flex-row py-16">
        <div className="flex flex-col gap-16 justify-center items-center ring-2 ring-blue-600 h-64 w-44 px-5 py-3 rounded-md">

          <svg xmlns="http://www.w3.org/2000/svg" className='size-10 fill-amber-500' viewBox="0 0 640 640"><path d="M451.5 160C434.9 160 418.8 164.5 404.7 172.7C388.9 156.7 370.5 143.3 350.2 133.2C378.4 109.2 414.3 96 451.5 96C537.9 96 608 166 608 252.5C608 294 591.5 333.8 562.2 363.1L491.1 434.2C461.8 463.5 422 480 380.5 480C294.1 480 224 410 224 323.5C224 322 224 320.5 224.1 319C224.6 301.3 239.3 287.4 257 287.9C274.7 288.4 288.6 303.1 288.1 320.8C288.1 321.7 288.1 322.6 288.1 323.4C288.1 374.5 329.5 415.9 380.6 415.9C405.1 415.9 428.6 406.2 446 388.8L517.1 317.7C534.4 300.4 544.2 276.8 544.2 252.3C544.2 201.2 502.8 159.8 451.7 159.8zM307.2 237.3C305.3 236.5 303.4 235.4 301.7 234.2C289.1 227.7 274.7 224 259.6 224C235.1 224 211.6 233.7 194.2 251.1L123.1 322.2C105.8 339.5 96 363.1 96 387.6C96 438.7 137.4 480.1 188.5 480.1C205 480.1 221.1 475.7 235.2 467.5C251 483.5 269.4 496.9 289.8 507C261.6 530.9 225.8 544.2 188.5 544.2C102.1 544.2 32 474.2 32 387.7C32 346.2 48.5 306.4 77.8 277.1L148.9 206C178.2 176.7 218 160.2 259.5 160.2C346.1 160.2 416 230.8 416 317.1C416 318.4 416 319.7 416 321C415.6 338.7 400.9 352.6 383.2 352.2C365.5 351.8 351.6 337.1 352 319.4C352 318.6 352 317.9 352 317.1C352 283.4 334 253.8 307.2 237.5z"/></svg>

          <p className="text-center text-xl text-blue-600">Connect with trusted local shops.</p>
        </div>

        <div className="flex flex-col gap-16 justify-center items-center ring-2 ring-blue-600 h-64 w-44 px-5 py-3 rounded-md">

          <svg xmlns="http://www.w3.org/2000/svg" className='size-10 fill-amber-500' viewBox="0 0 640 640"><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>

          <p className="text-center text-blue-600 text-xl">Save time - order directly from nearby stores.</p>
        </div>

        <div className="flex flex-col gap-16 justify-center items-center ring-2 ring-blue-600 h-64 w-44 px-5 py-3 rounded-md">

          <svg xmlns="http://www.w3.org/2000/svg" className='size-10 fill-amber-500' viewBox="0 0 640 640"><path d="M598.1 139.4C608.8 131.6 611.2 116.6 603.4 105.9C595.6 95.2 580.6 92.8 569.9 100.6L495.4 154.8L485.5 148.2C465.8 135 442.6 128 418.9 128L359.7 128L359.3 128L215.7 128C189 128 163.2 136.9 142.3 153.1L70.1 100.6C59.4 92.8 44.4 95.2 36.6 105.9C28.8 116.6 31.2 131.6 41.9 139.4L129.9 203.4C139.5 210.3 152.6 209.3 161 201L164.9 197.1C178.4 183.6 196.7 176 215.8 176L262.1 176L170.4 267.7C154.8 283.3 154.8 308.6 170.4 324.3L171.2 325.1C218 372 294 372 340.9 325.1L368 298L465.8 395.8C481.4 411.4 481.4 436.7 465.8 452.4L456 462.2L425 431.2C415.6 421.8 400.4 421.8 391.1 431.2C381.8 440.6 381.7 455.8 391.1 465.1L419.1 493.1C401.6 503.5 381.9 509.8 361.5 511.6L313 463C303.6 453.6 288.4 453.6 279.1 463C269.8 472.4 269.7 487.6 279.1 496.9L294.1 511.9L290.3 511.9C254.2 511.9 219.6 497.6 194.1 472.1L65 343C55.6 333.6 40.4 333.6 31.1 343C21.8 352.4 21.7 367.6 31.1 376.9L160.2 506.1C194.7 540.6 241.5 560 290.3 560L342.1 560L343.1 561L344.1 560L349.8 560C398.6 560 445.4 540.6 479.9 506.1L499.8 486.2C501 485 502.1 483.9 503.2 482.7C503.9 482.2 504.5 481.6 505.1 481L609 377C618.4 367.6 618.4 352.4 609 343.1C599.6 333.8 584.4 333.7 575.1 343.1L521.3 396.9C517.1 384.1 510 372 499.8 361.8L385 247C375.6 237.6 360.4 237.6 351.1 247L307 291.1C280.5 317.6 238.5 319.1 210.3 295.7L309 197C322.4 183.6 340.6 176 359.6 175.9L368.1 175.9L368.3 175.9L419.1 175.9C433.3 175.9 447.2 180.1 459 188L482.7 204C491.1 209.6 502 209.3 510.1 203.4L598.1 139.4z"/></svg>

          <p className="text-center text-blue-600 text-xl">Support local businesses.</p>
        </div>
      </div>
    </div>


    {/* Footer */}

    
    </div>
    

      )
  
  
}
