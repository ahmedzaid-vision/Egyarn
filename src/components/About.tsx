import { HiOutlineChevronRight } from "react-icons/hi";

const about = [
  "Raw material is only sourced from the most reputed international and local vendors as per pre defined policy",
  "Com4 licensee",
  "Soft wound yarn on dye/perforated plastic cones with option of 4° 20’ and 0° cylindrical cone angles. We have the biggest capacity in Egypt under one root  ",
  "Electronically controlled contamination free production, Jossi Vision Shield and manual picking/sorting on the same lines ensuring least possible contamination from Egyptian cotton fiber.",
  "All autocones are also equipped with contamination clearers",
  "All spindles in the autocones have superior splicers to ensure strength performance  ",
  "ISO Certified  ",
  "Oeko-tex Certified  ",
];

const AboutUs = () => {
  return (
    <section className="py-12 px-8 ">
      <div className="container mx-auto ">
        <div className="text-center text-4xl font-100  mb-4">About us</div>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
            <img
              src="/public/about-img.png"
              alt="About Us"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-700">
              We are producers of premium quality compact yarn well supported by
              top of the line machinery specially selected/designed to meet
              high-end requirements of the Shirting market, Polo & Flat
              knitting, Needle-craft applications like Sewing & Embroidery, Home
              Textile enthusiasts.Currently supplying to the top names in
              Europe, Turkey, South America, Asia and the Middle East on paper
              cones as well as on plastic cones/tubes ready for dyeing. We have
              been manufacturing yarn since 2009 and have one production unit fr
              the time being in the North - East of Egypt. Our total production
              capacity is over 24,000 spindles and we manufacture cotton only in
              a range of counts from ne 20/s to 100/s. We market over 2500 tons
              of combed cotton and compact Com4 yarn every year which translates
              to an annual turnover of USD $15.00 Millions As spinners, please
              note the following detail Product range 20/s to 100/s combed
              compact and from Ne 56/2 to 160/2 in the twisted / Gassed yarns.
              Final arrangements are under way for the twisting and gassing
              capacity.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row: Text */}
      <div className="container mx-auto mt-8">
        <ul>
          {about.map((item, index) => {
            return (
              <li className="flex items-center gap-4 mb-2 " key={index}>
                <div className="rounded-full  flex items-center justify-center p-[6px] border ">
                  {" "}
                  <HiOutlineChevronRight />
                </div>
                <div className="border-b pb-3 w-full">{item}</div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Third Row: Text */}
      <div className="container mx-auto mt-8">
        <div className=" text-[#5b5e60]  text-xl">Our MISSION</div>
        <p className="text-xl text-[#777777]">
          EGYYARN is committed to operating a successful business by developing,
          manufacturing, marketing and supporting quality yarn products for the
          world textile industry. We will accomplish this goal by: Developing
          long-term relationships with our customers and suppliers Providing
          superior quality products at competitive prices Exceeding industry
          standards with exceptional customer and technical service Maintaining
          our competitive position through leading edge technology Providing a
          safe, fulfilling, and rewarding work environment for our employees,
          and Serving and supporting the communities in which we operate.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
