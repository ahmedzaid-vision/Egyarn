function CareersPage() {
  return (
    <div className="mt-36 mb-10 mx-8">
      <div className="container mx-auto">
        <div className="text-center text-[40px] opacity-20 font-200 mb-12">
          CAREERS
        </div>
        <div className="mt-10">
          <form className="max-w-3xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-4">
              <textarea
                placeholder="Please describe your requirements *"
                className="w-full p-2 border rounded-md h-40 outline-none"
              ></textarea>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="field1"
                placeholder="Organization/Company Name"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field2"
                placeholder="Your Name"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field3"
                placeholder="Your Email"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field4"
                placeholder="Job Title"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field5"
                placeholder="What's you area of expertis"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field6"
                placeholder="Phone :(Include Country/ Area Code)"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field7"
                placeholder="Mobile Number"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field8"
                placeholder="Fax :(Include Country/ Area Code)"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field9"
                placeholder="Street Address"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field10"
                placeholder="City/State"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field10"
                placeholder="Zip/Postal Code"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field10"
                placeholder="Country"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="field10"
                placeholder="Cover Letter"
                className="w-full p-2 border rounded-md outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CareersPage;
