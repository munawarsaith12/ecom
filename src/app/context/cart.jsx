'use client';

import React, { createContext, useContext, useReducer } from 'react';
import CardReducer from '../reducer/CardReducer';
import { CartArrObj } from '@/component/CartArrObj';

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [items, dispatch] = useReducer(CardReducer, []);

  const addToCart = (id) => {
    const product = CartArrObj.find(p => p.id === id);
    if (product) {
      dispatch({
        type: 'ADDTOCARD',
        payload: {
         product
        },
      });
    }
  };
const increace=(id)=>{
  const index=items.findIndux(product=> product.id==id)
  if(items[index].quantity<10){
    dispatch({type:'INCREASE',id})
  }
}
  const removeFromCart = (id) => {
    const index=items.findIndux(product=> product.id==id)
    if(items[index].quantity>1){
    dispatch({ type: 'DECREASE', payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ items, addToCart,increace, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
