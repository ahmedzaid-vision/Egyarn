const Contact = () => {
  return (
    <div
      className="py-10 px-8 relative"
      style={{
        backgroundImage: "url(/public/footer-img.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(255, 0, 0, 0.5)", // Red background with 50% opacity
      }}
    >
      <div className="container mx-auto">
        <div className="flex gap-6 md:gap-[3%] flex-wrap">
          <form className="w-full  md:w-[50%]">
            <div className="mb-4 bg-transparent">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name *"
                className="mt-1 p-2 w-full rounded-md border outline-none bg-transparent placeholder-gray-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                className="mt-1 p-2 w-full border rounded-md outline-none bg-transparent placeholder-gray-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number *"
                className="mt-1 p-2 w-full border rounded-md bg-opacity-50 outline-none bg-transparent placeholder-gray-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject *"
                className="mt-1 p-2 w-full border rounded-md bg-opacity-50 outline-none bg-transparent placeholder-gray-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message *"
                className="mt-1 p-2 w-full h-40 border rounded-md bg-opacity-50 outline-none bg-transparent placeholder-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" w-full bg-[#384d39] text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
          <div className="w-full md:w-[47%] text-white ">
            <div className="text-3xl ">Egyyarn for Spinning</div>
            <div className="">144C Badr City-Cairo</div>
            <div className="">Private free zone</div>
            <div className="">P.O Box (3) Badr</div>
            <div className="mt-7">
              <div className="">Tel.: + 202 2310 82 83-4</div>
              <div className="">Fax.: + 202 2310 82 85</div>
              <div className="">info@egyyarn.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
