import Image from "next/image";
import Qrcode from  '../../public/image/Qrcode1.png'
import appstore from '../../public/image/appstore.png'
import playstore from '../../public/image/playstore.png'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* 1st Column */}
        <div className="col-span-2">
          <h4 className="text-lg font-bold mb-3">Exclusive</h4>
          <p className="mb-2">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-500 px-2 py-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <button className="text-white">{">"}</button>
          </div>
        </div>

        {/* 2nd Column */}
        <div>
          <h4 className="text-lg font-poppins font-medium mb-2">Support</h4>
          <p className="text-[14px] font-poppins font-regular ">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className=" text-[14px] font-poppins font-regular mt-2">exclusive@gmail.com</p>
          <p className=" text-[14px] font-poppins font-regular mt-1">+88015-88888-9999</p>
        </div>

        {/* 3rd Column */}
        <div>
          <h4 className="text-lg font-poppins font-medium mb-2">Account</h4>
          <ul className="space-y-1">
            <li className="text-[14px] font-poppins font-regular">My Account</li>
            <li className="text-[14px] font-poppins font-regular">Login / Register</li>
            <li className="text-[14px] font-poppins font-regular">Cart</li>
            <li className="text-[14px] font-poppins font-regular">Wishlist</li>
            <li className="text-[14px] font-poppins font-regular">Shop</li>
          </ul>
        </div>

        {/* 4th Column */}
        <div>
          <h4 className="text-lg font-poppins font-medium mb-2">Quick Link</h4>
          <ul className="text-[14px] font-poppins font-regular">
            <li  className="text-[14px] font-poppins font-regular ">Privacy Policy</li>
            <li  className="text-[14px] font-poppins font-regular ">Terms Of Use</li>
            <li  className="text-[14px] font-poppins font-regular ">FAQ</li>
            <li  className="text-[14px] font-poppins font-regular ">Contact</li>
          </ul>
        </div>

        {/* 5th Column */}
        <div>
          <h4 className="text-lg font-poppins font-medium mb-2">Download App</h4>
          <p className="text-[14px] font-poppins font-regular ">Save $3 with App New User Only</p>
          <div className="flex gap-2 mt-3">
            <Image src={Qrcode} alt="QR Code" width={80} height={80} />
            <div className="flex flex-col gap-2">
              <Image src={playstore} alt="Google Play" width={110} height={35} />
              <Image src={appstore} alt="App Store" width={110} height={35} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}
