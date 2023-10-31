import React from "react";

const Achievement = () => {
  return (
    <main>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center mb-16">
          <div className="flex-1 text-center md:text-left mb-8">
            <h2 className="text-4xl font-bold mb-4">
              Chúng tôi - Đối tác của bạn trong từ thiện
            </h2>
            <p className="text-lg text-gray-700">
              Với hơn 500 chiến dịch từ thiện thành công, chúng tôi đã tạo ra
              những thay đổi tích cực trong cuộc sống của nhiều người. Hãy cùng
              tham gia và hỗ trợ chúng tôi để làm thế giới trở nên tốt đẹp hơn.
            </p>
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
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
          <div className="text-center mb-8">
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
              <h4 className="text-xl font-semibold mb-2">Donation is Hope</h4>
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
              <h4 className="text-xl font-semibold mb-2">Donation is Hope</h4>
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
      </section>
    </main>
  );
};

export default Achievement;
