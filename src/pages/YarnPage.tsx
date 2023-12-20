function YarnPage() {
  return (
    <div className="mt-36 mb-10 mx-8">
      <div className="container mx-auto">
        <div className="text-center uppercase text-[40px] opacity-20 font-200 mb-12">
          Yarn
        </div>
        <div className="flex flex-wrap gap-[2%] ">
          <div className="w-full  lg:w-[58%]">
            <img
              src="../../public/yarn.jpg"
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-[40%] mt-5 lg:mt-0">
            COMPACT YARN: In the compact spinning system yarn quality is
            increased by means of narrowing and decreasing the width of the band
            of fibers, which come out from the drawing apparatus before it is
            twisted into yarn and by the elimination of the twisting triangle.
            The process reduces the fur ratio by 60 % while improving the
            strength and elongation by 15 to 20%. It also provides an unique
            texture to the yarn and the imperfections are reduced by 10 to 15%.
          </div>
        </div>
      </div>
    </div>
  );
}

export default YarnPage;
