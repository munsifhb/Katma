import React from 'react'
import { useGeneral } from '../context/GeneralContext'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ShopDetails() {
  const { shops } = useGeneral();
  const { id } = useParams()

  const shop = shops.find((s) => s.id === parseInt(id));

  if (!shop) {
    return <p className="text-center text-gray-600">Shop not found</p>;
  }

  
  return (
    <div className='bg-gray-50  min-h-screen pt-20 pb-20'>
      <h1 className="text-3xl text-center text-blue-600 ">Shop Detail</h1>

      <div className="">
      <div className='mt-16 w-4/5 md:w-3/5 sm:w-5/6 mx-auto mb-16'>
        <div className='bg-white rounded-lg shadow-md p-6 justify-between flex flex-col md:flex-row gap-6'>
          <img src={shop.image.replace('./', '/')} alt={shop.name} className="w-full md:w-1/3 object-cover h-64 md:h-auto rounded-md" />
          <div className="flex flex-col justify-between md:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">{shop.name}</h2>
            <p className="text-lg text-gray-700 mb-4">Category: {shop.category}</p>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 mb-6">Location: {shop.location}</p>
              <p className="text-gray-900 mb-6">{shop.descrition}</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className='mt-28 w-4/5 md:w-3/5 sm:w-5/6 mx-auto mb-16'>
      <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6'>
        {/* featured products */}
        {
          shop.products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="bg-white rounded-lg shadow-md p-2 overflow-hidden flex flex-col items-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img src={product.image.replace('./', '/')} alt={product.name} className="w-full object-cover h-48 mb-4" />
            <h3 className="text-lg font-medium text-blue-800">{product.name}</h3>
            <p className="text-sm text-gray-500">₦{product.price}</p>
          </Link>
          ))
        }
      </div>
      </div>
    </div>
  )
}
