import React from 'react'
import { useGeneral } from '../context/GeneralContext'
import { Link } from 'react-router-dom';

export default function Shops() {
  const { shops, filterShops } = useGeneral();
  return (
    <div className='bg-gray-200  min-h-screen pt-20 pb-20'>
      <h1 className="text-3xl text-center text-blue-600 ">Shops List</h1>

      <div className="">
      <div className='mt-16 w-4/5 md:w-3/5 sm:w-5/6 mx-auto mb-16'>
        <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6'>
          {filterShops.map((shop) => (
          <Link to={`/shop/${shop.id}`} key={shop.id} className="bg-white rounded-lg shadow-md p-2 overflow-hidden flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <img src={shop.image} alt={shop.name} className="w-full object-cover h-48 mb-4" />
                      <h3 className="text-lg font-medium text-blue-800">{shop.name}</h3>
                      <p className="text-sm text-gray-500">Category: {shop.category}</p>
                    </Link>
          ))}
        
        </div>
        </div>
        
      </div>
    </div>
  )
}
