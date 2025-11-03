import React from 'react'
import { useGeneral } from '../context/GeneralContext'
import { Link } from 'react-router-dom';

export default function Products() {
  const { filterProducts } = useGeneral()
  return (
    <div className='bg-gray-200 min-h-screen py-20'>
      <h1 className="text-3xl text-center text-blue-600 ">Products List</h1>

      <div className="">
      <div className='mt-16 w-4/5 md:w-4/5 sm:w-5/6 mx-auto mb-16'>
        <div className='grid grid-cols-4 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-6'>
          {filterProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-lg shadow-md p-2 overflow-hidden flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                      <img src={product.image} alt={product.name} className="w-full object-cover h-48 mb-4" />
                      <h3 className="text-lg font-medium text-blue-800">{product.name}</h3>
                      <p className="text-sm text-gray-500">₦{product.price}</p>
                    </Link>
          ))}
          </div>
        </div>
      </div>

    </div>
  )
}
