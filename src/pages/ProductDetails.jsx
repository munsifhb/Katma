import React  from 'react'
import { useGeneral } from '../context/GeneralContext'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ProductDetails() {
  const { allProducts, addCart, cart } = useGeneral();
  const { id } = useParams();

  // const product = allProducts.find(p => p.id === parseInt(id));

  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center text-gray-600">Product not found</p>;
  }
  
  return (
    <div className='bg-gray-200  min-h-screen pt-20 pb-20'>
      <h1 className="text-3xl text-center text-blue-600 ">Product Detail</h1>

      <div className="">

      <div className='mt-16 w-4/5 md:w-3/5 sm:w-5/6 mx-auto mb-16'>
        <div className='bg-white rounded-lg shadow-md p-6 justify-between flex flex-col md:flex-row gap-6'>
          <img src={product.image.replace('./', '/')} alt={product.name} className="w-full md:w-1/3 object-cover h-64 md:h-auto rounded-md" />
          <div className="flex flex-col justify-between md:w-2/3">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">{product.name}</h2>
            <p className="text-lg text-gray-700 mb-4">Price: ₦{product.price}</p>
            
            <div className="flex justify-between md:flex-row sm:flex-col mb-6">
            <p className="text-sm text-gray-500 mb-6">Shop Name: {product.shopName}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 mb-6">{product.descrition}</p>

              <p className="text-gray-600 mb-6">{product.loccation}</p>
            </div>
            <button onClick={() => addCart(product)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
        </div>
        </div>
        
      </div>

      
    </div>
  )
}
