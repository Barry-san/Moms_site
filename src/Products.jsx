import pepsi from "../public/mae-mu-z8PEoNIlGlg-unsplash.jpg";
import coke from "../public/nikhil-82LJQZGwW5o-unsplash.jpg";

function Products() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <section className="flex flex-col gap-8">
        <h2 className="text-2xl font-Oswald font-bold uppercase md:text-4xl lg:text-5xl">
          OUR PRODUCTS
        </h2>
        <p>
          We offer a wide variety of drinks produced by Pepsi-co,Coca-cola, and
          bigi driks, including, but not limited to Coke, Fanta, Sprite, 5alive
          Pulpy-orange, Pepsi, Mirinda, 7up, Fearless, and much more. All
          products are available in retail and wholesale while stocks last.
        </p>
      </section>
      <section className="product-gtimages grid gap-8 grid-flow-col w-full place-items-center">
        <div className="rounded-full bg-coke bg-cover bg-center w-56 h-56"></div>
        <div className="rounded-full bg-pepsi bg-cover bg-right w-56 h-56">
          {/* <img src={coke} alt="" /> */}
        </div>
      </section>
    </div>
  );
}

export default Products;
