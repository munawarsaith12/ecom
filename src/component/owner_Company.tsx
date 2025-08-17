import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaTwitterSquare, FaTwitter, FaInstagram } from "react-icons/fa";
export type  ownerProps={
    id:number,
    image: string,
    title:string,
    description:string,
    icons:ReactNode
}
 export const ownerArray: ownerProps[]=[
    {
    id:1,
    image:"/image/image46.png",
    title:"Tom Cruise",
    description:"Founder & Chairman",
     icons: [
     <FaTwitterSquare size={24} color="blue" />,
      <FaTwitter size={24} color="skyblue" />,
      <FaInstagram size={24} color="purple" />
    ]
    },
     {
    id:2,
    image:"/image/image51.png",
    title:"Emma Watson",
    description:"Managing Director",
     icons: [
     <FaTwitterSquare size={24} color="blue" />,
      <FaTwitter size={24} color="skyblue" />,
      <FaInstagram size={24} color="purple" />
    ]
    },
      {
    id:3,
    image:"/image/image47.png",
    title:"Will Smith",
    description:"Product Designer",
     icons: [
     <FaTwitterSquare size={24} color="blue" />,
      <FaTwitter size={24} color="skyblue" />,
      <FaInstagram size={24} color="purple" />
    ]
    }
    
 ]
export const serviceArra : ownerProps[] =[
  {
  id:1,
  image:"/image/icon_shop.png",
  title:"FREE AND FAST DELIVERY",
  description:"Free delivery for all orders over $140",
  icons:"FREE AND FAST DELIVERY"
  },
  {
    id:2,
  image:"/image/customerService.png",
  title:"24/7 CUSTOMER SERVICE",
  description:"Friendly 24/7 customer support",
  icons:"24/7 CUSTOMER SERVICE",
  },
   {
    id:3,
  image:"/image/IconSecure.png",
  title:"MONEY BACK GUARANTEE",
  description:"We reurn money within 30 days",
  icons:"MONEY BACK GUARANTEE",
  }
]

