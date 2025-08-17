// import React from 'react'
// import Image from 'next/image'
// import { CartArrObj } from './CartArrObj'
// import CartItem from './CartItem'

// // Optional: move to types.ts if reused
// export interface CartItemProps {
//   id: number;
//   image: string;
//   title: string;
//   discription: string;
//   price: string;
//   sellprice: string;
// }

// const Cart: React.FC = () => {
//   return (
//     <section className='max-w-[1100px] mx-auto'>
//       <h2 className="text-2xl font-bold mb-4">Cart Section</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {
//           CartArrObj.map((curCart) => (
//             <CartItem key={curCart.id} {...curCart} />
//           ))
//         }
//       </div>
//     </section>
//   )
// }

// export default Cart;
