import React, {useState} from 'react'
import { useGeneral } from '../context/GeneralContext'


export default function Cart() {
  const { cart, clearCart, total, removeCart, addCart, subCart, isOpen, setIsOpen } = useGeneral();
  const [quantity, setQuantity] = useState(1);
   
  return (
    <div onClick={() => setIsOpen(false)} className='bg-gray-200 min-h-screen py-20 flex flex-col items-center gap-6'>
      <div className="w-4/5 mx-auto flex justify-between">
      <div className=" flex gap-1 flex-col">
        <h1 className="text-xl text-blue-600 text-start md:text-xl sm:text-lg">Cart Items: {cart.length}</h1>
        <p className="text-amber-500 text-xl">Total: ₦{total.toLocaleString()}</p>
        </div>
        <div  className="flex gap-2 items-center">
          <p className="text-gray-700 text-xl">Clear All: </p>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => clearCart(cart)} className='fill-red-500 size-8 cursor-pointer' viewBox="0 0 640 640"><path d="M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/></svg>
        </div>
        </div>
        {cart.length === 0 ? (
          <div className=" justify-center">
          <svg xmlns="http://www.w3.org/2000/svg"className='size-20 fill-amber-500 stroke-amber-800 mx-auto' viewBox="0 0 640 640"><path d="M0 72C0 58.7 10.7 48 24 48L69.3 48C96.4 48 119.6 67.4 124.4 94L124.8 96L537.5 96C557.5 96 572.6 114.2 568.9 133.9L537.8 299.8C532.1 330.1 505.7 352 474.9 352L171.3 352L176.4 380.3C178.5 391.7 188.4 400 200 400L456 400C469.3 400 480 410.7 480 424C480 437.3 469.3 448 456 448L200.1 448C165.3 448 135.5 423.1 129.3 388.9L77.2 102.6C76.5 98.8 73.2 96 69.3 96L24 96C10.7 96 0 85.3 0 72zM160 528C160 501.5 181.5 480 208 480C234.5 480 256 501.5 256 528C256 554.5 234.5 576 208 576C181.5 576 160 554.5 160 528zM384 528C384 501.5 405.5 480 432 480C458.5 480 480 501.5 480 528C480 554.5 458.5 576 432 576C405.5 576 384 554.5 384 528zM336 142.4C322.7 142.4 312 153.1 312 166.4L312 200L278.4 200C265.1 200 254.4 210.7 254.4 224C254.4 237.3 265.1 248 278.4 248L312 248L312 281.6C312 294.9 322.7 305.6 336 305.6C349.3 305.6 360 294.9 360 281.6L360 248L393.6 248C406.9 248 417.6 237.3 417.6 224C417.6 210.7 406.9 200 393.6 200L360 200L360 166.4C360 153.1 349.3 142.4 336 142.4z"/></svg>
          <p className="text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          <div className='w-4/5 md:w-4/5 sm:w-5/6 flex flex-col gap-6 mb-16 mx-auto py-8'>
            {cart.map((product) => (
              <div key={product.id} className="bg-white w-full mx-auto rounded-lg shadow-md p-4 flex md:flex-row sm:flex-col gap-5 items-center">
                <img src={product.image.replace('./', '/')} alt={product.name} className="w-72 object-cover h-80 mb-4" />
                <div className="flex flex-col gap-y-10 w-full">
                  <h3 className="text-xl font-medium text-blue-800">{product.name}</h3>
                  <div className="w-full flex justify-between">
                <p className="text-sm text-gray-500">₦{product.price}</p>
                    <p className="text-amber-500 text-xl font-semibold">Cost: ₦{product.quantity * product.price}</p>
                  </div>
                <p className="text-sm text-gray-500 flex gap-1 items-center">Qauntity:  
                                   <button onClick={() => addCart(product)}  className="bg-gray-100 text-gray-800 w-10 h-10 ring-1 ring-gray-700 hover:bg-gray-50 transition-colors duration-300 ease-in-out">
                  +
                </button>
                <span className="">{product.quantity}</span>
                <button onClick={() => subCart(product)} className="bg-gray-100 text-gray-800 w-10 h-10 ring-1 ring-gray-700 hover:bg-gray-50 transition-colors duration-300 ease-in-out">
                  -
                </button>
                </p>
                <p className="text-sm text-gray-500">Shop: {product.shopName}</p>
                <div className="flex justify-between w-full items-center"> 
                  <svg xmlns="http://www.w3.org/2000/svg" onClick={() => removeCart(product.id)} className='size-8 fill-red-500 cursor-pointer' viewBox="0 0 640 640"><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
                  <div className="flex gap-1 items-center">
                    
                    <button className='text-lg text-gray-50 w-24 h-8 border-none bg-emerald-500'>Checkout</button>
                </div>
                </div>

                </div>
                
              </div>
            ))}
          </div>
        )}
    </div>
  )
}
