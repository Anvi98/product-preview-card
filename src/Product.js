import perfume from "./assets/image-product-mobile.jpg"

export const Product = () => {
  return ( 
    <div className="bg-white   w-9/12 rounded-xl items-center mx-auto my-auto h-fit">
      <img src={perfume} alt="perfume" className="rounded-tr-xl rounded-tl-xl"/>
      <div className="p-4">
        <p className="text-grayish-blue text-sm tracking-custom my-3">PERFUME</p>
        <h2 className="title text-2xl font-bold">Gabrielle Essence Eau de Parfum</h2>
        <p className="text-grayish-blue text-base">A floral, solar and voluptous interpretation composed by Olivier Polge, Perfumer-Creator for the 
          house of CHANEL.
        </p>

        <span>
        <p>$149.99</p>
        <p>$169.99</p>
        </span>

        <button>Add to Card</button>
       
      </div>
     
    </div>
   );
}
 