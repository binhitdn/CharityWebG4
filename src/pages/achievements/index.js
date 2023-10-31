import React from "react";

const Achievement = () => {
  return (
    <main>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="flex justify-center mb-16">
            <div className="w-full md:w-1/2 p-8">
              <div className="text-center mb-8">
                <span className="text-xl text-indigo-600">Thành tích</span>
                <h2 className="text-4xl font-bold text-gray-800">
                  Những gì chúng tôi đã làm được
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src="assets/img/gallery/socialEvents1.png"
                    alt=""
                    className="w-full h-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    Donation is Hope
                  </h4>
                  <ul className="text-gray-600">
                    <li>
                      <i className="far fa-clock"></i> 8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down"></i> 18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> Athens, Greece
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src="assets/img/gallery/socialEvents2.png"
                    alt=""
                    className="w-full h-auto mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    A hand for Children
                  </h4>
                  <ul className="text-gray-600">
                    <li>
                      <i className="far fa-clock"></i> 8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down"></i> 18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> Athens, Greece
                    </li>
                  </ul>
                </div>
                {/* Add more events as needed */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Achievement;
