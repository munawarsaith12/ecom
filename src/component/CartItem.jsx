// // CartItem.tsx
// "use client"
// import React from 'react'
// import Image from 'next/image';

// import { CartProps } from './CartArrObj';
// import cart from '../app/addToCard/page'
// import { useCart } from '../app/context/cart';
// const CartItem = ({cart}) => {
// // console.log('the cart ',cart.product)
//   const {items,increace,removeFromCart}=useCart();
//   return (
//     <section className='max-w-[1100px]'>
//       <div className='w-full flex   border mt-6'>
//       <div className='w-[200px] flex justify-center items-center '>
//         <Image src={cart.product.image} alt={cart.title} width={100} height={100} priority />
//         </div>
//         <div >
//         <h3 className='text-base text-[#030712] font-bold'>{cart.product.title }</h3>
//       <p className='text-[#DC2626] text-[26px] font-bold'>{cart.product.price}</p>
        
//         <div>
//         <button onClick={increace(cart.product.id)}>
//             +
//         </button>
//         <p>{items.length}</p>
//         <button onClick={removeFromCart(cart.product.id)}>
//           -
//          </button>
//         </div>
//          </div>
//       </div>
//     </section>
//   );
// };

// export default CartItem;
