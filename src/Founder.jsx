import mama from "../public/IMG_0742 2.jpg";
function Founder() {
  return (
    <div className="p-8 flex gap-8 flex-col">
      <section>
        <h2 className="text-2xl font-Oswald font-bold uppercase md:text-4xl lg:text-5xl">
          The founder
        </h2>
      </section>
      <section>
        <p className="md:text-lg text-base font-Barlow">
          God is able ventures was fonded in 2018 by Oyeyemi Olufunke with the
          vision of quenching the thirsts of thousands of mouths and providing
          people with a variety of beverages at competitive prices. She is proud
          mother of three, and a sleeper in her spare time.
        </p>
      </section>
      <section>
        <img src={mama} alt="Mama Barakah" className="max-w-full md:hidden" />
      </section>
    </div>
  );
}

export default Founder;
