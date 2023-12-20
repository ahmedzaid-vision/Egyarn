function CarmentsPage() {
  return (
    <div className="mt-36 mb-10 mx-8">
      <div className="container mx-auto">
        <div className="text-center text-[40px] opacity-20 font-200 mb-12">
          READY MADE GARMENTS
        </div>
        <div className="flex flex-wrap gap-[2%] ">
          <div className="w-full  lg:w-[50%]">
            <img
              src="../../public/garment.jpg"
              alt=""
              className="w-full object-cover"
            />
          </div>

          <div className="w-full lg:w-[40%] mt-5 lg:mt-0 opacity-80">
            <span className="block text-lg font-bold"> Garmenting</span>
            Garment division is equipped with cutting-edge machines to
            manufacture both woven and knitted garments. All machines have
            underbed trimmers and a computer stitch control. Everyday these
            machines produce 10,000 complex garments with multiplex pockets and
            design features. All the protective clothing manufactured by Loyal
            has EN (CE) certification. The division is equipped to produce 2
            million woven garments and 3.5 million knitted garments.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarmentsPage;
