import React, { createContext, useState, useContext, useMemo, useEffect, use } from 'react';
import { shops } from '../data/shops';
import { toast } from 'react-toastify';

export const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState(() => {
      const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
    });

const allProducts = useMemo(() => {
    return (shops || []).flatMap(shop =>
      (shop.products || []).map(product => ({
        ...product,
        shopName: shop.name,
        shopId: shop.id,
      }))
    );
  }, [shops]);



  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const filterShops = shops.filter((shop) => 
    shop.name.toLowerCase().includes(search.toLowerCase()) ||
    shop.category.toLowerCase().includes(search.toLowerCase()) ||
    shop.location.toLowerCase().includes(search.toLowerCase())
  );

  const filterProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addCart = (product) => {
     setCart((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === product.id);

    if (existingItem) {
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    
    }

      

  });

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000, // Close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  


  }

  const subCart = (product) => {
     setCart((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === product.id);

    if (existingItem) {
      return prevItems.map((item) =>
        item.id === product.id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });

  }

  const removeCart = (id) => {
    setCart((prevItems) =>
      prevItems.filter(item => item.id !== id)
    );
  }

  const clearCart = () => setCart([]);
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

    return (
        <GeneralContext.Provider value={{ shops, search,total, subCart, cart, setCart, clearCart, removeCart, addCart, setSearch, allProducts, filterShops, filterProducts }}>
            {children}
        </GeneralContext.Provider>
    );
} 

export const useGeneral = () => useContext(GeneralContext);
