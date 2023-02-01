import perfume from "./assets/image-product-mobile.jpg"
import perfumeDesk from "./assets/image-product-desktop.jpg"
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Product = () => {
  return ( 
    <div className="bg-white w-9/12 rounded-xl items-center mx-auto my-auto md:h-46 md:flex md:max-w-xl ">
      <img src={perfume} alt="perfume" className="rounded-tr-xl rounded-tl-xl md:hidden"/>
      <img src={perfumeDesk} alt="perfume" className=" hidden rounded-tl-xl rounded-bl-xl object-contain h-full md:block "/>
      <div className="px-6 pt-6 md:h-full">
        <p className="text-grayish-blue text-sm tracking-custom my-4">PERFUME</p>
        <h2 className="custom-font text-2xl font-bold leading-none mb-4 md:text-3xl">Gabrielle Essence Eau de Parfum</h2>
        <p className="text-grayish-blue text-base mb-5">A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the 
          house of CHANEL.
        </p>

        <span className="flex">
        <p className="custom-font font-bold text-2xl text-dark-cyan">$149.99</p>
        <p className="text-sm line-through text-grayish-blue mx-4 my-3">$169.99</p>
        </span>

        <button className="bg-dark-cyan text-white py-2 px-3 w-full text-base rounded my-4 hover:bg-dark-blue">
           <span className="flex justify-center"><AiOutlineShoppingCart className="text-white mx-2 mt-1"/>Add to Card</span>
           </button>
       
      </div>
     
    </div>
   );
}
 