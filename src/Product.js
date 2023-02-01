import perfume from "./assets/image-product-mobile.jpg"
import perfumeDesk from "./assets/image-product-desktop.jpg"

export const Product = () => {
  return ( 
    <div className="bg-white w-9/12 rounded-xl items-center mx-auto my-auto h-fit md:h-3/5 md:flex max-w-xl">
      <img src={perfume} alt="perfume" className="rounded-tr-xl rounded-tl-xl md:hidden"/>
      <img src={perfumeDesk} alt="perfume" className=" hidden rounded-tl-xl rounded-bl-xl object-cover h-full md:block "/>
      <div className="p-4 md:h-full">
        <p className="text-grayish-blue text-sm tracking-custom my-3">PERFUME</p>
        <h2 className="custom-font text-2xl font-bold leading-none mb-3">Gabrielle Essence Eau de Parfum</h2>
        <p className="text-grayish-blue text-base mb-5">A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the 
          house of CHANEL.
        </p>

        <span className="flex">
        <p className="custom-font font-bold text-2xl text-dark-cyan">$149.99</p>
        <p className="text-sm line-through text-grayish-blue mx-4 my-3">$169.99</p>
        </span>

        <button className="bg-dark-cyan text-white py-2 px-3 w-full text-base rounded my-2">Add to Card</button>
       
      </div>
     
    </div>
   );
}
 