import React from "react";

const Achievement = () => {
  return (
    <main>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex items-center justify-center mb-16">
          <div className="flex-1 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Hơn 500 Chiến Dịch Đã Tổ Chức
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              "Hơn 500 Chiến Dịch Đã Tổ Chức" là một sáng kiến từ thiện với hơn
              500 chiến dịch thành công đã được tổ chức. Chúng tôi đã kết nối và
              hỗ trợ cộng đồng, mang lại sự thay đổi tích cực trong cuộc sống
              của nhiều người. Hãy cùng tham gia và hỗ trợ chúng tôi để làm thế
              giới trở nên tốt đẹp hơn.
            </p>
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Xem thêm
            </button>
          </div>
          <div className="flex-1 justify-center items-center">
            <img
              src="https://cdn.thuvienphapluat.vn//uploads/tintuc/2022/09/28/lam-tu-thien.jpg"
              alt="achievement"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-16">
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
                    src="https://cdn.thuvienphapluat.vn//uploads/tintuc/2022/09/28/lam-tu-thien.jpg"
                    alt=""
                    className="w-full h-auto mb-4 rounded-lg"
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
                    src="https://cdn.thuvienphapluat.vn//uploads/tintuc/2022/09/28/lam-tu-thien.jpg"
                    alt=""
                    className="w-full h-auto mb-4 rounded-lg"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Achievement;
