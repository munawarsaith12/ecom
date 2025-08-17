// app/product/[id]/page.tsx

import { CartArrObj } from '@/component/CartArrObj';
import Image from 'next/image';
import listItem from '../../../../public/image/ListItem.png';
import { notFound } from 'next/navigation';
import Icon from '../../../../public/image/Icon.png';
import Stars from '@/component/Stars';

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = CartArrObj.find(
    (item) => item.id.toString() === params.id
  );

  if (!product) {
    notFound();
  }

  return (
    <section className='max-w-[1100px] h-[660px] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='w-full md:w-[500px] h-[300px] md:h-[500px] flex justify-center items-center'>
        <Image src={product.image} alt={product.title} width={300} height={300} />
      </div>
      <div className='flex flex-col gap-4 w-[500px] h-[500px] px-2'>
        <h1 className='text-2xl text-[#FFFFFF] md:text-[#030712] font-bold'>{product.title}</h1>
        <p className='text-sm text-[rgb(75,85,99)] font-Inter font-Regular'>{product.description}</p>
        <Stars rating={product.rating} />
        <div className='flex w-22 justify-center items-center gap-4'>
          <p className='text-xl text-red-600 font-bold'>{product.price}</p>
          <p className='line-through text-gray-500'>{product.sellPrice}</p>
        </div>
        <button className='w-[167px] h-[46px] text-[#FFFFFF] bg-[#16A34A] capitalize-lg rounded'>
          order on whatsapp
        </button>
        <div className='hidden w-[550px] h-[129px] md:flex flex-col justify-center items-center border border-solid rounded border-[#6B7280]'>
          <div className='w-[550px] h-[60px] flex justify-center items-center gap-2'>
            <div className='w-[30px] h-[30px]'>
              <Image src={listItem} alt='listItem' width={26} height={26} />
            </div>
            <div className='w-[500px] flex items-center justify-center'>
              <p className='text-base text-[#6B7280] font-inter'>
                Payment. Payment upon receipt of goods, Payment by card in the department, Google Pay,
                Online card, -5% discount in case of payment
              </p>
            </div>
          </div>
          <hr className='w-full text-[#6B7280]' />
          <div className='w-[550px] h-[60px] flex justify-center items-center gap-2'>
            <div className='w-[30px] h-full flex justify-center items-center'>
              <Image src={Icon} alt='icon' width={26} height={26} className='text-[#6B7280]' />
            </div>
            <div className='w-[500px] flex items-center justify-center'>
              <p className='text-base text-[#6B7280] font-inter'>
                Warranty. The Consumer Protection Act does not provide for the return of this product of proper
                quality.
              </p>
            </div>
          </div>
        </div>
        <button className='w-[160px] h-[46px] text-[#FFFFFF] bg-[#16A34A] text-start px-2 text-[14px] font-inter font-bold'>
          Add to card
        </button>
      </div>
    </section>
  );
}
