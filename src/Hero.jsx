import beer from "../public/undraw_having_fun_re_vj4h.svg";

function Hero() {
  return (
    <div className="p-8 flex gap-8 flex-col">
      <section>
        <h1 className="text-2xl font-Oswald font-bold uppercase md:text-4xl lg:text-5xl">
          God Is Able Ventures
        </h1>
      </section>
      <section className="flex items-center justify-center p-8">
        <img src={beer} alt="" />
      </section>
      <section>
        <p className="md:text-lg text-base font-Barlow">
          God is able Ventures is your one-stop shop for all your beverage
          needs. We sell a wide variety of beverages in both wholesale and
          retail quantities. Whether you are a restaurant owner looking to stock
          up on drinks for your customers or an individual looking to purchase a
          few bottles of your favorite soda, we have you covered. Our selection
          includes everything from soda and water to Juices and Yogurt. We have
          it all! We pride ourselves on offering high-quality beverages at
          competitive prices, and our friendly and knowledgeable staff is always
          on hand to help you find the perfect drink for your needs. So stop by
          today and check out our extensive selection of beverages!
        </p>
      </section>
    </div>
  );
}

export default Hero;
