
const Counter = () => {
  const statistics = [
    { title: 'Established on', count: 2008 },
    { title: 'Employee', count: 150 },
    { title: 'Area in thousand meters', count: 25 },
  ];

  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        {statistics.map((statistic, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h3 className="text-3xl font-bold mb-2">{statistic.count}</h3>
              <p className="text-gray-600">{statistic.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
