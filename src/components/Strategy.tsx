function Strategy() {
  return (
    <div
      className="relative px-8 py-16"
      style={{
        backgroundImage: "url(/public/strategy-img.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "red",
      }}
    >
      <div className="absolute inset-0 bg-[#f29736] opacity-80  "></div>
      <div className="container mx-auto z-20 relative">
        <div className="text-center text-5xl text-[#333] ">STRATEGY</div>
        <div className="my-9 text-[#333] w-full lg:w-[70%] mx-auto text-lg leading-loose">
          EGYYARN’s strategy focuses on growing into a producer of high & fine
          quality yarn with distinctive brand name in the international market.
          Through its relative short operating life, the company has managed to
          establish a strong equity for the EGYYARN brand by maintaining the
          products high quality and keeping close relationship with customers to
          understand and promptly respond to their needs, This brand recognition
          serves in marketing the company’s products, overcoming competition and
          representing its passport to new clients in the international market.F
        </div>
      </div>
    </div>
  );
}

export default Strategy;
