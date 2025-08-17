'use client'
import CartItem from '@/component/CartItem';
import { useCart } from '../context/cart';

// Optional: move to types.ts if reused
// export interface CartItemProps {
//   id: number;
//   image: string;
//   title: string;
//   discription: string;
//   price: string;
//   sellprice: string;
// }

const Cart = () => {
  const {items}=useCart()
  return (
    <section className='max-w-[1100px] mx-auto flex flex-col items-center'>
      <h2 className="text-2xl font-bold mb-4">Cart Section</h2>
    < div>
      <div className="flex justify-center  flex-col items-center">
        {
          items.map((curCart) => (
            <CartItem key={curCart.id} cart={curCart} />
          ))
        }
      </div>
      </div >
      <div className=' w-60 h-30 flex flex-col justify-center items-center bg-gray-400 text-black w'>
          <p>
          total items
        </p>
        <p>
          total Price
        </p>
      </div>
    </section>
  )
}

export default Cart;
